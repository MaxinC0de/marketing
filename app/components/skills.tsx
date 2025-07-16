"use client"

import { useSkillsAnimation } from "@/src/gsap/useSkillsAnimation"
import { CircleArrowRight } from "lucide-react"
import Image from "next/image"
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
          className="relative flex justify-between group p-3 cursor-pointer"
        >
          <p className="group-hover:opacity-100 opacity-80 transition-all duration-500">
            {label}
          </p>
          <CircleArrowRight />
          <Image
            src={`/images/skills/${i}.png`}
            alt=""
            width={700}
            height={300}
            ref={(el) => {
              if (el) refs.current[i] = el
            }}
            className="absolute z-10 -top-4/5 left-1/2 opacity-0 object-cover w-48 h-auto"
          ></Image>
        </div>
      ))}
    </section>
  )
}
