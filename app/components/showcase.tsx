import { ArrowRightCircle } from "lucide-react"

export default function Showcase() {
  const LABELS = [
    "PLATEFORME DE MARQUE",
    "CAMPAGNE PUBLICITAIRE",
    "STRATEGIE DIGITALE",
    "CONTENU DE MARQUE",
  ]
  return (
    <section className="flex flex-col w-full bg-[#1b1b1b] p-6 -mx-6 gap-6 rounded-bl-2xl rounded-br-2xl">
      {LABELS.map((el, i) => (
        <div className="mx-auto w-[90%]">
          <div key={i} className="flex justify-between items-center">
            <p className="opacity-75 text-white text-xl font-bold">{el}</p>
            <ArrowRightCircle className="opacity-75 text-white size-8" />
          </div>
          <div className="w-full h-[0.5px] mt-6 bg-white opacity-60"></div>
        </div>
      ))}
    </section>
  )
}
