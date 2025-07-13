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
      <div></div>
      <div className="text-white">
        {HEADER_LABELS.map((header, i) => (
          <>
            <h3 className="font-black">{header}</h3>
            <ul>
              {SUB_LABELS[i].map((name) => (
                <li>{name}</li>
              ))}
            </ul>
          </>
        ))}
      </div>
    </footer>
  )
}
