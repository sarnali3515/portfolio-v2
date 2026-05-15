"use client";
import React, { useState, useRef, useEffect } from "react";

export default function ReelCarousel({
    items,
    baseSpeedMobile = 40,
    baseSpeedDesktop = 35,
    boostSpeed = 35,
    decelerationDuration = 6000,
    perspective = 1400,
    rotationX = 10,
    cardHeight = 250,
}) {
    const FIXED_CARD_COUNT = 10;

    const [isDragging, setIsDragging] = useState(false);
    const [screen, setScreen] = useState(null);

    const rotationAngle = useRef(0);
    const currentSpeed = useRef(1);
    const lastMouseX = useRef(0);
    const lastTimestamp = useRef(0);
    const decelerationStartTime = useRef(0);
    const animationRef = useRef(null);
    const reelRef = useRef(null);
    const dragStarted = useRef(false);
    const mouseDownX = useRef(0);

    // fixed values for 10 cards
    const cardWidth = 220;
    const translateZDesktop = 350;
    const translateZTablet = 250;
    const translateZMobile = 180;

    // screen detect 
    useEffect(() => {
        const updateScreen = () => {
            const w = window.innerWidth;
            if (w < 768) setScreen("mobile");
            else if (w < 1024) setScreen("tablet");
            else if (w < 1280) setScreen("lg");
            else if (w < 1536) setScreen("xl");
            else setScreen("2xl");
        };

        updateScreen();
        window.addEventListener("resize", updateScreen);
        return () => window.removeEventListener("resize", updateScreen);
    }, []);

    // always 10 cards
    const displayItems = React.useMemo(() => {
        if (!items?.length) return [];
        const list = [];
        for (let i = 0; i < FIXED_CARD_COUNT; i++) {
            list.push(items[i % items.length]);
        }
        return list;
    }, [items]);

    const applyRotation = () => {
        const transform = `rotateX(${rotationX}deg) rotateY(${rotationAngle.current}deg)`;
        if (reelRef.current) reelRef.current.style.transform = transform;
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        dragStarted.current = false;
        lastMouseX.current = e.clientX;
        mouseDownX.current = e.clientX;
        currentSpeed.current = 0;
        decelerationStartTime.current = 0;
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const deltaX = e.clientX - lastMouseX.current;

        if (!dragStarted.current) {
            if (Math.abs(deltaX) < 5) return;
            dragStarted.current = true;
        }

        lastMouseX.current = e.clientX;

        rotationAngle.current += deltaX * -0.8;
        applyRotation();
        currentSpeed.current =
            deltaX > 0 ? boostSpeed : -boostSpeed;
    };

    const handleMouseUp = () => {
        if (!isDragging) return;
        setIsDragging(false);

        const diff = Math.abs(lastMouseX.current - mouseDownX.current);
        if (diff < 5) {
            dragStarted.current = false;
            currentSpeed.current =
                rotationAngle.current >= 0 ? 1 : -1;
            decelerationStartTime.current = 0;
            return;
        }

        if (dragStarted.current) {
            decelerationStartTime.current = Date.now();
        }
    };

    const animateRotation = (timestamp = 0) => {
        if (lastTimestamp.current === 0) {
            lastTimestamp.current = timestamp;
        }

        const deltaTime = timestamp - lastTimestamp.current;
        lastTimestamp.current = timestamp;

        if (decelerationStartTime.current > 0) {
            const elapsed = Date.now() - decelerationStartTime.current;
            const progress = Math.min(elapsed / decelerationDuration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const direction = Math.sign(currentSpeed.current);

            currentSpeed.current =
                direction * (boostSpeed + (1 - boostSpeed) * easeOut);

            if (progress >= 1) {
                currentSpeed.current = direction;
                decelerationStartTime.current = 0;
            }
        }

        const baseSpeed =
            window.innerWidth >= 1024 ? baseSpeedDesktop : baseSpeedMobile;

        const rotationIncrement =
            (deltaTime / 1000) * (360 / baseSpeed) * currentSpeed.current;

        rotationAngle.current += rotationIncrement;
        applyRotation();

        animationRef.current = requestAnimationFrame(animateRotation);
    };

    useEffect(() => {
        animationRef.current = requestAnimationFrame(animateRotation);

        const handleGlobalMouseUp = () => isDragging && handleMouseUp();
        const handleGlobalMouseMove = (e) => isDragging && handleMouseMove(e);

        document.addEventListener("mouseup", handleGlobalMouseUp);
        document.addEventListener("mousemove", handleGlobalMouseMove);

        return () => {
            if (animationRef.current)
                cancelAnimationFrame(animationRef.current);

            document.removeEventListener("mouseup", handleGlobalMouseUp);
            document.removeEventListener("mousemove", handleGlobalMouseMove);
        };
    }, [isDragging]);

    // responsive config 
    const configs = {
        mobile: { w: 240, h: 240, scale: 0.5, z: translateZMobile },
        tablet: { w: 400, h: 400, scale: 0.6, z: translateZTablet },
        lg: { w: 450, h: 450, scale: 0.75, z: translateZDesktop * 0.8 },
        xl: { w: 500, h: 500, scale: 1, z: translateZDesktop },
        "2xl": { w: 700, h: 700, scale: 1.2, z: translateZDesktop * 1.2 },
    };

    const config = configs[screen] || configs.xl;

    if (!screen) return null;

    return (
        <div
            className="relative flex justify-center items-center min-h-[500px] select-none"
            style={{ perspective }}
        >
            <div
                ref={reelRef}
                className="cursor-grab active:cursor-grabbing"
                style={{
                    width: config.w,
                    height: config.h,
                    transformStyle: "preserve-3d",
                    transform: `rotateX(${rotationX}deg)`,
                    willChange: "transform",
                }}
                onMouseDown={handleMouseDown}
            >
                {displayItems.map((item, i) => {
                    const angle = (i / displayItems.length) * 360;

                    return (
                        <div
                            key={i}
                            className="absolute rounded-xl overflow-hidden transition-all duration-300 group
                            bg-gray-100 border border-fuchsia-400/80 hover:border-fuchsia-600
                            shadow-lg shadow-gray-200/50
                            dark:bg-gray-950 dark:hover:border-white dark:shadow-none"
                            style={{
                                width: cardWidth * config.scale,
                                height: cardHeight * config.scale,
                                transform: `rotateY(${angle}deg) translateZ(${config.z}px)`,
                                left: "50%",
                                top: "50%",
                                transformOrigin: "center center",
                                translate: "-50% -50%",
                            }}
                        >
                            <div className="flex flex-col items-center justify-center h-full p-4">
                                <div className="w-20 h-20 md:w-24 md:h-24 mb-3 transition-all duration-300 group-hover:scale-110">
                                    <img
                                        src={item.icon}
                                        alt={item.name}
                                        className="w-full h-full object-contain dark:brightness-110"
                                    />
                                </div>

                                <h3 className="text-sm md:text-lg font-semibold text-center uppercase tracking-wider
                                text-gray-800 dark:text-white
                                group-hover:text-purple-600 dark:group-hover:text-fuchsia-400">
                                    {item.name}
                                </h3>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}