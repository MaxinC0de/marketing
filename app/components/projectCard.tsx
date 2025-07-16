"use client"

import Image from "next/image"

export default function ProjectCard({ project }) {
  return (
    <article className="relative flex flex-col gap-y-4 p-8 bg-[#1e1e1e] text-white rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-500 origin-left">
      <p className="opacity-80">/ {project.year}</p>
      <h2 className="text-lg font-black">{project.name}</h2>
      <Image
        src={`/images/projects/${project.src}.png`}
        alt=""
        width={700}
        height={300}
        className="object-cover w-full h-auto"
      />
      <div className="absolute right-13 bottom-13 bg-white text-black px-3 py-1 font-black rounded-2xl">
        {project.type}
      </div>
    </article>
  )
}
