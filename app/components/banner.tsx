import Image from "next/image"
import { dyna } from "../fonts"
import PlayButton from "./playButton"

export default function Banner() {
  return (
    <section className="mt-[10vh] p-6">
      <h1 className={`text-8xl ml-5 ${dyna.className}`}>Des histoires</h1>
      <h1 className="text-8xl font-bold">QUI FONT</h1>
      <h1 className="text-8xl font-bold my-4">ECLORENT LES MARQUES</h1>
      <div className="relative">
        <Image
          src="/images/banner.png"
          alt=""
          width={700}
          height={300}
          className="w-full h-auto object-cover"
        />
        <PlayButton />
      </div>
    </section>
  )
}
