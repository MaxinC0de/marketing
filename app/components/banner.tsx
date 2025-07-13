"use client"

import Image from "next/image"
import PlayButton from "./playButton"

export default function Banner() {
  return (
    <div className="relative mt-6 p-3">
      <Image
        src="/images/banner.png"
        alt=""
        width={700}
        height={300}
        className="object-cover w-full"
      />
      <PlayButton />
    </div>
  )
}
