import SkillSection from "../components/skills/SkillSection"
import ProjectSection from "../components/projects/ProjectSection"
import Education from "../components/Education/Education"
import BannerSection from "../components/Banner/BannerSection"
import ExperienceSection from "../components/Experience/ExperienceSection"
import ContactSection from "../components/Contact/ContactSection"
import FollowPointer from "../components/FollowPointer"

export default function Home() {
  return (
    <section className="">
      <BannerSection />
      <SkillSection />
      <ProjectSection />
      <ExperienceSection />
      <Education />
      <ContactSection />
      <div className="hidden md:block">
        <FollowPointer />
      </div>


    </section>
  );
}
