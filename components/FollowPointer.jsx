"use client"

import {
    motion,
    useMotionValue,
    useSpring,
} from "motion/react"

import { useEffect } from "react"

export default function CursorTrail() {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    useEffect(() => {
        const moveCursor = (e) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }

        window.addEventListener("pointermove", moveCursor)

        return () => {
            window.removeEventListener(
                "pointermove",
                moveCursor
            )
        }
    }, [])

    const trails = Array.from({ length: 8 })

    return (
        <>
            {trails.map((_, index) => {
                const size = 25 - index * 3

                const x = useSpring(mouseX, {
                    stiffness: 300 - index * 25,
                    damping: 25,
                })

                const y = useSpring(mouseY, {
                    stiffness: 300 - index * 25,
                    damping: 25,
                })

                return (
                    <motion.div
                        key={index}
                        style={{
                            x,
                            y,
                            opacity: 1 - index * 0.12,
                            fontSize: 30 - index,
                        }}
                        className="trail"
                    >
                        ✧
                    </motion.div>
                )
            })}

            <style>{`
    .trail {
        position: fixed;
        top: 0;
        left: 0;

        pointer-events: none;
        z-index: 9999;

        font-size: 18px;
        font-weight: bold;

        color: #d946ef;

        transform: translate(-50%, -50%);

        // text-shadow:
        //     0 0 8px rgba(217,70,239,0.8),
        //     0 0 18px rgba(217,70,239,0.5),
        //     0 0 30px rgba(217,70,239,0.3);

        mix-blend-mode: screen;
    }
`}</style>
        </>
    )
}