"use client"

import { useSkillsAnimation } from "@/src/gsap/useSkillsAnimation"
import { CircleArrowRight } from "lucide-react"
import { useRef, useState } from "react"

export default function Skills() {
  const LABELS = [
    "PLATEFORME DE MARQUE",
    "CAMPAGNE PUBLICITAIRE",
    "STRATEGIE DIGITALE",
    "CONTENU DE MARQUE",
  ]
  const [indexSkill, setIndexSkill] = useState(null)
  const refs = useRef([])
  useSkillsAnimation(refs, indexSkill)
  return (
    <section className="flex flex-col bg-[#1b1b1b] text-white rounded-2xl mt-3">
      {LABELS.map((label, i) => (
        <div
          key={label}
          onMouseEnter={() => {
            setIndexSkill(i)
          }}
          onMouseLeave={() => {
            setIndexSkill(null)
          }}
          className="relative flex justify-between p-3 cursor-pointer"
        >
          <p>{label}</p>
          <CircleArrowRight />
          <div
            ref={(el) => {
              if (el) refs.current[i] = el
            }}
            className={`absolute w-24 h-24 bg-white left-1/2 opacity-0 ${i % 2 === 0 ? "rotate-10" : "-rotate-10"}`}
          ></div>
        </div>
      ))}
    </section>
  )
}
