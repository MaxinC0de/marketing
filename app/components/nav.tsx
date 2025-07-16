"use client"

import Image from "next/image"

export default function Nav() {
  return (
    <nav className="flex justify-between p-6">
      <Image
        src="/images/logo.png"
        alt=""
        width={700}
        height={300}
        className="size-12"
      />
      <div className="flex justify-between gap-x-8 text-black">
        <button className="cursor-pointer hover:text-lg hover:font-black transition-all duration-500">
          ACCUEIL
        </button>
        <button className="cursor-pointer hover:text-lg hover:font-black transition-all duration-500">
          A PROPOS DE NOUS
        </button>
        <button className="cursor-pointer hover:text-lg hover:font-black transition-all duration-500">
          SERVICES
        </button>
        <button className="cursor-pointer hover:text-lg hover:font-black transition-all duration-500">
          PROJETS
        </button>
        <button className="border-1 border-black px-6 rounded-full hover:bg-black hover:text-white transition-colors duration-500 cursor-pointer">
          CONTACT
        </button>
      </div>
    </nav>
  )
}
