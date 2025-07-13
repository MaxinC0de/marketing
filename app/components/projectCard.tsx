"use client"

import Image from "next/image"

export default function ProjectCard({ project }) {
  return (
    <div className="flex flex-col w-[46vw] bg-[#2e2e2e] text-white rounded-2xl p-4 gap-y-3">
      <p className="opacity-80">{project.year}</p>
      <h2 className="text-2xl font-black">/ {project.name}</h2>
      <div className="relative object-cover">
        <Image
          src={project.src}
          alt=""
          width={700}
          height={300}
          className="w-full h-auto rounded-2xl"
        />
        <div className="absolute bottom-3 right-3 text-black bg-white px-3 py-1 font-black rounded-2xl">
          {project.type}
        </div>
      </div>
    </div>
  )
}
