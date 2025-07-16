"use client"

import Image from "next/image"
import PlayButton from "./playButton"
import { dyna } from "@/src/fonts/fonts"

export default function Banner() {
  return (
    <div className="p-6">
      <p className="font-black text-6xl mb-6">
        <span className={`font-medium text-7xl ${dyna.className}`}>
          Des histoires
        </span>{" "}
        <br /> QUI FONT <br /> ECLORENT LES MARQUES
      </p>
      <div className="relative">
        <Image
          src="/images/banner.png"
          alt=""
          width={700}
          height={300}
          className="object-cover w-full"
        />
        <PlayButton />
      </div>
    </div>
  )
}
