"use client"

import Image from "next/image"
import { dyna } from "../fonts"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

export default function Marquee() {
  const LABELS = [
    "ferrero",
    "lavazza",
    "lipton",
    "matines",
    "netto",
    "nutella",
    "quick",
    "shell",
  ]
  const containerRef = useRef(null)
  const contentRef = useRef(null)
  useGSAP(() => {
    const contentWidth = contentRef.current.offsetWidth / 2
    gsap.fromTo(
      contentRef.current,
      { x: 0 },
      {
        x: -contentWidth,
        duration: 10,
        ease: "linear",
        repeat: -1,
      },
    )
  }, [])
  return (
    <div ref={containerRef} className="overflow-hidden">
      <div className="flex justify-center items-center text-2xl font-bold my-[15vh]">
        <p className="text-5xl leading-0">
          DES ESPRITS CREATIFS AU <br /> SERVICE DE VOTRE{" "}
          <span className={`${dyna.className} !font-medium text-8xl`}>
            marque
          </span>
        </p>
      </div>
      <div
        ref={contentRef}
        className="flex items-center gap-x-6 min-w-max h-[10vh] bg-black"
      >
        {LABELS.map((src, i) => (
          <div className="w-26 h-auto object-cover">
            <Image
              src={`/images/marquee/${src}.png`}
              alt=""
              width={700}
              height={300}
              className="w-full h-auto"
            />
          </div>
        ))}
        {LABELS.map((src, i) => (
          <div className="w-24 h-auto object-cover">
            <Image
              src={`/images/marquee/${src}.png`}
              alt=""
              width={700}
              height={300}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
