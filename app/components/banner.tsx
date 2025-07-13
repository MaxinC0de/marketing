"use client"

import Image from "next/image"
import { useState } from "react"
import { dyna } from "../fonts"

export default function Banner() {
  const [isPaused, setIsPaused] = useState(false)
  return (
    <section className="flex flex-col px-[3vw]">
      <h1 className={`${dyna.className} text-6xl`}>Des histoires</h1>
      <h1 className="text-6xl font-black mb-6">
        QUI FONT <br /> ECLORENT LES MARQUES
      </h1>
      <div className="relative">
        <Image
          src="/images/banner.png"
          alt=""
          width={700}
          height={300}
          className="w-full object-cover"
        />
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center size-8 rounded-full transition-colors duration-500 ${isPaused ? "bg-black" : "bg-white"}`}
        >
          <button
            onClick={() => {
              setIsPaused(!isPaused)
            }}
            className="-rotate-180 size-3"
          >
            <Image
              src={`/images/triangle-${isPaused ? "white" : "black"}.png`}
              alt=""
              width={700}
              height={300}
            />
          </button>
        </div>
      </div>
    </section>
  )
}
