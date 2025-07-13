import About from "./components/about"
import Banner from "./components/banner"
import Gallery from "./components/gallery"
import Marquee from "./components/marquee"
import Ratings from "./components/ratings"
import Skills from "./components/skills"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Banner />
      <Skills />
      <About />
      <Marquee />
      <Gallery />
      <Ratings />
    </div>
  )
}
