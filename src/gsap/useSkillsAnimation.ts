import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

export function useSkillsAnimation(refs, indexSkill) {
  useGSAP(() => {
    refs.current.forEach((el, i) => {
      if (!el) return
      const isActive = i === indexSkill
      gsap.to(el, {
        opacity: isActive ? 1 : 0,
        y: isActive ? -20 : 0,
        rotate: isActive ? (i % 2 === 0 ? -10 : 10) : 0,
        duration: 0.6,
        ease: "power2.out",
      })
    })
  }, [indexSkill])
}
