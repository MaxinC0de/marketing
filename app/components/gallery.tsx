import ProjectCard from "./projectCard"

export default function Gallery() {
  const projects = [
    {
      name: "PRESIDENT",
      src: "0",
      year: "2022",
      type: "BRANDING",
    },
    {
      name: "LINDT",
      src: "1",
      year: "2021",
      type: "BRANDING",
    },
    {
      name: "QUICK",
      src: "2",
      year: "2023",
      type: "BRANDING",
    },
    {
      name: "LORINA",
      src: "3",
      year: "2020",
      type: "BRANDING",
    },
  ]
  return (
    <section className="flex flex-col items-center gap-6 p-3 pb-12 bg-black">
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </section>
  )
}
