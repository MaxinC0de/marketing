"use client"

import Image from "next/image"

export default function ProjectCard({ project }) {
  return (
    <article className="relative flex flex-col w-[90%] gap-y-3 p-4 bg-[#1e1e1e] text-white rounded-2xl">
      <p className="opacity-80">/ {project.year}</p>
      <h2 className="text-lg font-black">{project.name}</h2>
      <Image
        src=""
        alt=""
        width={700}
        height={300}
        className="object-cover w-full h-auto"
      />
      <div className="absolute bottom-3 right-3 bg-white px-3 py-1 font-black rounded-2xl">
        {project.type}
      </div>
    </article>
  )
}
