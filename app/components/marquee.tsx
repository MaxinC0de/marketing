"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useMarqueeAnimation } from "../animations/useMarqueeAnimation"

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
  const [brandSize, setBrandSize] = useState(null)
  const containerRef = useRef(null)
  const calculateBrandSizeRef = useRef(null)
  useEffect(() => {
    setBrandSize(
      (calculateBrandSizeRef.current?.offsetWidth / LABELS.length) * 0.6,
    )
  }, [])
  useMarqueeAnimation(containerRef)
  return (
    <div ref={containerRef} className="flex w-[200%] will-change-transform">
      <div
        ref={calculateBrandSizeRef}
        className="flex justify-around w-[100vw] mt-12 bg-black py-3"
      >
        {LABELS.map((brand) => (
          <Image
            key={brand}
            src={`/images/marquee/${brand}.png`}
            alt=""
            width={700}
            height={300}
            className="object-contain"
            style={{ width: brandSize ? `${brandSize}px` : undefined }}
          />
        ))}
      </div>
      <div className="flex justify-around w-[100vw] mt-12 bg-black py-3">
        {LABELS.map((brand) => (
          <Image
            key={brand}
            src={`/images/marquee/${brand}.png`}
            alt=""
            width={700}
            height={300}
            className="object-contain"
            style={{ width: brandSize ? `${brandSize}px` : undefined }}
          />
        ))}
      </div>
    </div>
  )
}
