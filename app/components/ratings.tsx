"use client"

import { useRatingsAnimation } from "@/src/gsap/useRatingsAnimation"
import { useRef } from "react"

export default function Ratings() {
  const animatedRef = useRef(null)
  useRatingsAnimation(animatedRef)
  return (
    <section className="flex flex-col p-3 font-black text-2xl leading-tight">
      <p>Une équipe à l'écoute, créative et</p>
      <p ref={animatedRef} className="opacity-0">
        ultra réactive. Grâce à eux, notre marque a enfin trouvé une identité
        forte et cohérente. Un vrai partenaire de confiance.
      </p>
    </section>
  )
}
