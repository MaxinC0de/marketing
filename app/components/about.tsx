import Image from "next/image"

export default function About() {
  return (
    <section className="relative p-3">
      <div className="absolute"></div>
      <div className="flex flex-col justify-between gap-y-3">
        <Image
          src="/images/about.png"
          alt=""
          width={700}
          height={300}
          className="w-full h-[10vh] rounded-2xl object-cover"
        />
        <p>
          Nous transformons vos ambitions en émotions, en façonnant des
          campagnes sur mesure qui racontent votre histoire, captivent vos
          audiences et donnent vie à l'essence même de votre marque.
        </p>
        <button className="font-black underline text-left">LIRE PLUS</button>
      </div>
    </section>
  )
}
