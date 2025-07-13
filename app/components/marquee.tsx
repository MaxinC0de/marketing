"use client"

import { useMarqueeAnimation } from "@/src/gsap/useMarqueeAnimation"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

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
  const [brandWidth, setBrandWidth] = useState(null)
  const containerRef = useRef(null)
  const calculateRef = useRef(null)
  useEffect(() => {
    const brandWidth =
      (calculateRef?.current?.offsetWidth / LABELS.length) * 0.72
    setBrandWidth(brandWidth)
  }, [])
  useMarqueeAnimation(containerRef)
  return (
    <div
      ref={containerRef}
      className="overflow-hidden flex justify-center w-[200vw] will-change-transform"
    >
      <div
        ref={calculateRef}
        className="flex w-[100vw] gap-x-3 p-3 pr-0 bg-black will"
      >
        {LABELS.map((label) => (
          <Image
            key={label}
            src={`/images/marquee/${label}.png`}
            alt=""
            width={700}
            height={300}
            className="object-contain flex-none h-auto"
            style={{ width: `${brandWidth}px` }}
          />
        ))}
      </div>
      <div className="flex w-[100vw] gap-x-3 p-3 pl-0 bg-black">
        {LABELS.map((label) => (
          <Image
            key={label}
            src={`/images/marquee/${label}.png`}
            alt=""
            width={700}
            height={300}
            className="object-contain h-auto"
            style={{ width: `${brandWidth}px` }}
          />
        ))}
      </div>
    </div>
  )
}
