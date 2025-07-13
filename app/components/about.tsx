"use client"

import { useRef } from "react"
import { dyna } from "../fonts"
import { useScrollTriggerAnimation } from "../animations/useScrollTriggerAnimation"
import Image from "next/image"

export default function About() {
  const headerRef = useRef(null)
  const imageRef = useRef(null)
  useScrollTriggerAnimation(headerRef, imageRef)
  return (
    <div className="flex flex-col mx-auto w-[97vw] p-[3vw]">
      <div className="relative">
        <div ref={headerRef} className="absolute">
          <h1 className="w-[60vw] text-3xl font-black">
            DES ESPRITS CREATIFS AU <br /> SERVICE DE VOTRE
            <span className={dyna.className}>marque</span>
          </h1>
        </div>
        <div ref={imageRef} className="flex mt-24 gap-x-[5vw] opacity-0">
          <Image
            src="/images/banner.png"
            alt=""
            width={700}
            height={300}
            className="object-cover w-[60vw] h-[20vh] rounded-2xl"
          />
          <div className="flex flex-col max-w-[35vw]">
            <p>
              Nous transformons vos ambitions en émotions, en façonnant des
              campagnes sur mersure qui racontent votre histoire, captivent vos
              audiences et donnent vie à l'essence même de votre marque
            </p>
            <p className="font-black underline">LIRE PLUS</p>
          </div>
        </div>
      </div>
    </div>
  )
}
