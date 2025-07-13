import ProjectCard from "./projectCard"

export default function Gallery() {
  const labels = [
    {
      name: "PRESIDENT",
      year: 2022,
      src: "",
      type: "BRANDING",
    },
    {
      name: "LINDT",
      year: 2021,
      src: "",
      type: "BRANDING",
    },
    {
      name: "QUICK",
      year: 2023,
      src: "",
      type: "BRANDING",
    },
    {
      name: "LORINA",
      year: 2020,
      src: "",
      type: "BRANDING",
    },
  ]
  return (
    <div className="flex flex-col bg-black gap-y-6 py-6">
      <h1 className="text-white text-2xl font-black ml-[3vw]">
        NOS PROJETS PHARES
      </h1>
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-12">
        {labels.map((project, i) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  )
}
