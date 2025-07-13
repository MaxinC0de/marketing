import ProjectCard from "./projectCard"

export default function Gallery() {
  const projects = [
    {
      name: "PRESIDENT",
      year: "2022",
      type: "BRANDING",
    },
    {
      name: "LINDT",
      year: "2021",
      type: "BRANDING",
    },
    {
      name: "QUICK",
      year: "2023",
      type: "BRANDING",
    },
    {
      name: "LORINA",
      year: "2020",
      type: "BRANDING",
    },
  ]
  return (
    <section className="flex flex-col items-center gap-6 p-3 bg-black">
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </section>
  )
}
