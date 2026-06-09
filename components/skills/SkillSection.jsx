'use client';
import SectionTitle from "../SectionTitle";
import SkillCarousel from "./SkillCarousel";

const Skills = () => {
    // Prepare items array with skill data using public folder paths
    const skillItems = [
        { name: "Next js", icon: "/images/icon/next-js.png" },
        { name: "React js", icon: "/images/icon/react-icon.png" },
        { name: "Node Js", icon: "/images/icon/node-js.png" },
        { name: "Express js", icon: "/images/icon/express-js.png" },
        { name: "Mongodb", icon: "/images/icon/mongodb.png" },
        { name: "Firebase", icon: "/images/icon/firebase.png" },
        { name: "Tailwind", icon: "/images/icon/tailwind.png" },
        { name: "Javascript", icon: "/images/icon/javascript.png" },
        { name: "CSS3", icon: "/images/icon/css3.png" },
        { name: "HTML5", icon: "/images/icon/html-5.png" }
    ];

    return (
        <div id="skills" className='py-20 bg-gradient-to-b from-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-900'>
            <SectionTitle
                text="My Expertise"
                title="Skills"
                description="Experienced with modern frontend and backend technologies."
            />

            {/* 3D Carousel */}
            <div className="">
                <SkillCarousel
                    items={skillItems}
                    mobileCardCount={10}
                    desktopCardCount={10}
                    baseSpeedMobile={40}
                    baseSpeedDesktop={35}
                    boostSpeed={20}
                    decelerationDuration={6000}
                    perspective={1400}
                    rotationX={-20}
                    cardHeight={250}
                />
            </div>
        </div>
    );
};

export default Skills;