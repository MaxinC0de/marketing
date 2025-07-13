import { useState } from "react"
import { Triangle } from "lucide-react"

export default function PlayButton() {
  const [isPaused, setIsPaused] = useState(false)
  const handleClick = () => {
    setIsPaused(!isPaused)
  }
  console.log(isPaused)
  return (
    <div
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center size-10 rounded-full transition-all duration-500 group hover:bg-black ${isPaused ? "bg-black" : "bg-white"}`}
    >
      <button onClick={handleClick} className="cursor-pointer">
        <Triangle
          className={`size-6 rotate-90 group-hover:text-white ${isPaused ? "text-white" : "text-black"}`}
        />
      </button>
    </div>
  )
}
