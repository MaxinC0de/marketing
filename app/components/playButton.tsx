"use client"

import { useState } from "react"

export default function PlayButton() {
  const [isPaused, setIsPaused] = useState(false)
  return (
    <button
      onClick={() => {
        setIsPaused(!isPaused)
      }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
    >
      <div className="group flex justify-center items-center size-24 rounded-full bg-white transition-colors duration-300 hover:bg-black">
        <div
          className={`size-8 ${isPaused ? "rounded-full" : "rounded-none"} bg-black transition-all duration-300 group-hover:bg-white`}
        ></div>
      </div>
    </button>
  )
}
