"use client"

import { CircleArrowRight } from "lucide-react"
import Image from "next/image"
import { useRef, useState } from "react"
import { useSkillsAnimation } from "../animations/useSkillsAnimation"

export default function Skills() {
  const LABELS = [
    "PLATEFORME DE MARQUE",
    "CAMPAGNE PUBLICITAIRE",
    "STRATEGIE DIGITALE",
    "CONTENU DE MARQUE",
  ]
  const [activeIndex, setActiveIndex] = useState(null)
  const refs = useRef([])
  useSkillsAnimation(refs, activeIndex)
  return (
    <section className="w-[97vw] flex flex-col justify-center mx-[3vw] mt-6 bg-[#1b1b1b] rounded-2xl text-white p-6">
      {LABELS.map((el, i) => (
        <div
          onMouseOver={() => {
            setActiveIndex(i)
          }}
          onMouseLeave={() => {
            setActiveIndex(null)
          }}
          className={`relative flex justify-between ${i > 0 ? "mt-6" : ""}`}
        >
          <p className="opacity-75">{el}</p>
          <CircleArrowRight />
          <div
            ref={(el) => {
              if (el) refs.current[i] = el
            }}
            className={`absolute opacity-0 left-1/2 -translate-x-1/2 bg-white w-24 h-24 rounded-2xl ${i === 0 % 2 ? "-rotate-10" : "rotate-10"}`}
          ></div>
        </div>
      ))}
    </section>
  )
}
