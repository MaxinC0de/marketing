"use client"

import { useState } from "react"
import { Pause, Triangle } from "lucide-react"

export default function PlayButton() {
  const [isPaused, setIsPaused] = useState(false)
  const handleClick = () => {
    setIsPaused(!isPaused)
  }
  return (
    <div
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center size-16 rounded-full transition-all duration-500 group bg-white hover:bg-black ${isPaused ? "bg-white" : ""}`}
    >
      <button onClick={handleClick} className="cursor-pointer">
        {isPaused ? (
          <Pause className="size-8 fill-black border-0 group-hover:fill-white" />
        ) : (
          <Triangle
            className={`size-8 rotate-90 fill-black group-hover:fill-white border-0 border-transparent ml-1.5`}
          />
        )}
      </button>
    </div>
  )
}
