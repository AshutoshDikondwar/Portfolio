import About from "@/components/about";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDevider from "@/components/sectionDevider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 px-5 pb-5">
      <Intro />
      <SectionDevider/>
      <About/>
      <Projects/>
      <Skills/>
      <Education/>
      <Contact/>
    </main>
  )
}
