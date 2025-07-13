import About from "./components/about"
import Banner from "./components/banner"
import Marquee from "./components/marquee"
import Skills from "./components/skills"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Banner />
      <Skills />
      <About />
      <Marquee />
      <div className="mt-[20vh]"></div>
    </div>
  )
}
