import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

export function useSkillsAnimation(refs, indexSkill) {
  useGSAP(() => {
    refs.current.forEach((el, i) => {
      if (!el) return
      if (i === indexSkill) {
        gsap.to(el, { opacity: 1 })
      } else {
        gsap.to(el, { opacity: 0 })
      }
    })
  }, [indexSkill])
}
