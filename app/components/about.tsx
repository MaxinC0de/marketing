"use client"

import { dyna } from "@/src/fonts/fonts"
import { useAboutAnimation } from "@/src/gsap/useAboutAnimation"
import Image from "next/image"
import { useRef } from "react"

export default function About() {
  const primaryRef = useRef(null)
  const secondaryRef = useRef(null)
  useAboutAnimation(primaryRef, secondaryRef)
  return (
    <section className="relative p-6">
      <div className="absolute right-6 opacity-40 text-extralight">
        / a propos de nous
      </div>
      <div className="flex flex-col justify-between gap-y-3">
        <div ref={primaryRef} className="absolute w-[70vw] font-black text-2xl">
          DES ESPRITS CREATIFS AU <br /> SERVICE DE VOTRE
          <span className={`text-4xl ml-3 ${dyna.className}`}>marque.</span>
        </div>
        <div ref={secondaryRef} className="flex justify-between opacity-0">
          <Image
            src="/images/about.png"
            alt=""
            width={700}
            height={300}
            className="w-[43vw] h-auto rounded-2xl object-cover"
          />
          <div className="flex flex-col justify-end w-[43vw]">
            <p>
              Nous transformons vos ambitions en émotions, en façonnant des
              campagnes sur mesure qui racontent votre histoire, captivent vos
              audiences et donnent vie à l'essence même de votre marque.
            </p>
            <button className="font-black underline text-left mt-3">
              LIRE PLUS
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
