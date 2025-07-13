import { dyna } from "@/src/fonts/fonts"

export default function Footer() {
  const HEADER_LABELS = ["ENTREPRISE", "SERVICES", "CLIENTS"]
  const SUB_LABELS = [
    ["A PROPOS DE NOUS", "POURQUOI NOUS", "NOS PROJETS", "NOS COLLABORATIONS"],
    [
      "PLATEFORME DE MARQUE",
      "CAMPAGNE PUBLICITAIRE",
      "STRATEGIE DIGITALE",
      "CONTENU DE MARQUE",
    ],
    ["RESSOURCES", "ETUDE DE CAS", "SERVICE CLIENT"],
  ]
  return (
    <footer>
      <div className="bg-[#1b1b1b] text-white p-3 py-6">
        <p className="font-black text-2xl text-center">
          DONNEZ VIE A VOTRE <br />
          <span className={`text-[#bb308b] text-5xl ${dyna.className}`}>
            vision créative
          </span>
          <br /> DES AUJOURD'HUI
        </p>
      </div>
      <div className="flex flex-col items-center gap-3 p-3 py-6 bg-black text-white text-left">
        {HEADER_LABELS.map((header, i) => (
          <>
            <h3 className="font-black">{header}</h3>
            <ul className="opacity-90">
              {SUB_LABELS[i].map((name) => (
                <li>{name}</li>
              ))}
            </ul>
          </>
        ))}
        <div className="flex flex-col">
          <p>ABONNEZ VOUS A NOTRE NEWSLETTER</p>
          <div className="flex">
            <input type="text" placeholder="Entrez votre adresse mail..." />
            <button className="bg-white text-black font-black px-3 py-1">
              ABONNEZ VOUS
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
