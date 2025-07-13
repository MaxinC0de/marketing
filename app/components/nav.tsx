"use client"

import Image from "next/image"
import { Button } from "../../components/ui/button"

export default function Nav() {
  return (
    <nav className="flex justify-between items-center p-[3vw]">
      <div className="w-12">
        <Image src="/images/logo.png" alt="" width={700} height={300} />
      </div>
      <Button className="bg-white text-black border-1 border-black rounded-full px-6">
        CONTACT
      </Button>
    </nav>
  )
}
