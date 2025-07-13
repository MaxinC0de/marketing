"use client"

import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="flex justify-between p-6">
      <Image
        src="/images/logo.png"
        alt=""
        width={700}
        height={300}
        className="size-12"
      />
      <nav className="flex gap-x-[3vw]">
        <Link href="/">ACCUEUIL</Link>
        <Link href="/a-propos">A PROPOS DE NOUS</Link>
        <Link href="/services">SERVICES</Link>
        <Link href="/projets">PROJETS</Link>
        <Link href="/contact">
          <button className="cursor-pointer border-1 rounded-2xl border-black px-4 transition-colors duration-200 hover:bg-black hover:text-white">
            CONTACT
          </button>
        </Link>
      </nav>
    </header>
  )
}
