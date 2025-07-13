"use client"

import Image from "next/image"

export default function Nav() {
  return (
    <nav className="p-3">
      <Image
        src="/images/logo.png"
        alt=""
        width={700}
        height={300}
        className="size-18"
      />
    </nav>
  )
}
