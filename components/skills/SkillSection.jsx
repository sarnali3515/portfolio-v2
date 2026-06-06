'use client';
import SectionTitle from "../SectionTitle";
import SkillCarousel from "./SkillCarousel";

const Skills = () => {
    // Prepare items array with skill data using public folder paths
    const skillItems = [
        { name: "Next js", icon: "/images/Icons/next-js.png" },
        { name: "React js", icon: "/images/Icons/react-icon.png" },
        { name: "Node Js", icon: "/images/Icons/node-js.png" },
        { name: "Express js", icon: "/images/Icons/express-js.png" },
        { name: "Mongodb", icon: "/images/Icons/mongodb.png" },
        { name: "Firebase", icon: "/images/Icons/firebase.png" },
        { name: "Tailwind", icon: "/images/Icons/tailwind.png" },
        { name: "Javascript", icon: "/images/Icons/javascript.png" },
        { name: "CSS3", icon: "/images/Icons/css3.png" },
        { name: "HTML5", icon: "/images/Icons/html-5.png" }
    ];

    return (
        <div id="skills" className='py-20 bg-gradient-to-b from-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-900'>
            <SectionTitle title="Skills" description="Skill section demo" />

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