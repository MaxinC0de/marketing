import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function useAboutAnimation(primaryRef, secondaryRef) {
  useGSAP(() => {
    const h = primaryRef.current.offsetHeight
    gsap
      .timeline({
        scrollTrigger: {
          trigger: primaryRef.current,
          start: "bottom bottom",
        },
      })
      .fromTo(
        primaryRef.current,

        { top: "50%", left: "50%", x: "-50%", y: "-50%" },
        {
          top: 23,
          left: 23,
          x: 0,
          y: 0,
          duration: 1,
          delay: 0.5,
        },
      )
      .fromTo(
        secondaryRef.current,
        {
          opacity: 0,
          marginTop: primaryRef.current.offsetHeight * 1.3,
        },
        { opacity: 1, duration: 1.5, delay: 0.5 },
        "<",
      )
  })
}
