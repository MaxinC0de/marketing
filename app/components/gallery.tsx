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
    <section className="flex flex-col p-6 pb-12 bg-black">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="text-[#f1f1f1] text-extralight font-sm">/ portfolio</p>
          <h2 className="font-black text-white text-4xl">NOS PROJETS PHARES</h2>
        </div>
        <div className="w-[50vw] flex flex-wrap justify-end gap-3">
          <button className="cursor-pointer bg-black text-white p-1 px-5 hover:bg-white hover:text-black border-1 border-white rounded-2xl">
            TOUS LES PROJETS
          </button>
          <button className="cursor-pointer bg-black text-white p-1 px-5 hover:bg-white hover:text-black border-1 border-white rounded-2xl">
            STRATEGIE DIGITALE
          </button>
          <button className="cursor-pointer bg-black text-white p-1 px-5 hover:bg-white hover:text-black border-1 border-white rounded-2xl">
            BRANDING
          </button>
          <button className="cursor-pointer bg-black text-white p-1 px-5 hover:bg-white hover:text-black border-1 border-white rounded-2xl">
            CAMPAGNE PUBLICITAIRE
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-12">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
      <p className="underline text-white mt-3">VOIR TOUS LES PROJETS</p>
    </section>
  )
}
