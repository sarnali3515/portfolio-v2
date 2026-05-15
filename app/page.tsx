import SkillSection from "../components/skills/SkillSection"
import ProjectSection from "../components/projects/ProjectSection"
import Education from "../components/Education/Education"
import BannerSection from "../components/Banner/BannerSection"
import FollowPointer from "../components/FollowPointer"

export default function Home() {
  return (
    <section className="">
      <BannerSection />
      <SkillSection />
      <ProjectSection />
      <Education />
      <FollowPointer />

    </section>
  );
}
