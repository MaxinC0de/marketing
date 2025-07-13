import Banner from "./components/banner"
import Header from "./components/header"
import Marquee from "./components/marquee"
import Showcase from "./components/showcase"

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Showcase />
      <Marquee />
    </div>
  )
}
