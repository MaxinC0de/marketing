"use client"

import { useMarqueeAnimation } from "@/src/gsap/useMarqueeAnimation"
import Image from "next/image"
import { useRef } from "react"

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

export default function Marquee() {
  const containerRef = useRef(null)
  useMarqueeAnimation(containerRef)
  return (
    <div className="overflow-hidden bg-black py-3">
      <div ref={containerRef} className="flex gap-x-6 w-max">
        {[...LABELS, ...LABELS].map((label, i) => (
          <Image
            key={label + i}
            src={`/images/marquee/${label}.png`}
            alt={label}
            width={120}
            height={60}
            className="w-[120px] h-auto object-contain flex-none"
          />
        ))}
      </div>
    </div>
  )
}
