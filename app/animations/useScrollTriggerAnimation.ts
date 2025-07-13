import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function useScrollTriggerAnimation(headerRef, imageRef) {
  useGSAP(() => {
    gsap.fromTo(
      headerRef.current,
      {
        top: "50%",
        left: "50%",
        x: "-50%",
        y: "-50%",
      },
      {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "bottom bottom",
          onEnter: () => {
            gsap.to(imageRef.current, {
              opacity: 1,
              duration: 1,
              delay: 0.5,
            })
          },
        },
        top: 0,
        left: 0,
        x: 0,
        y: 0,
        duration: 1.5,
      },
    )
  })
}
