import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="">
        <div className="w-full relative">
          <Image
            src="https://i.imgur.com/uXwUySw.png"
            alt="image fond valeurs"
            width={1920}
            height={540}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bodoni text-white text-5xl text-center">
            Decouvrez nos démarches pour l&apos;environnement
          </div>
        </div>
        <section className="bg-slate-200 flex flex-col items-center">
          <div className="max-w-7xl">
            <div className="flex items-center">
              <div className="w-1/2">
                <h2 className="text-3xl font-bodoni font-bold mb-4">
                  Notre engagement environnemental
                </h2>
                <p className="text-justify mr-4">
                  <span className="font-bodoni font bold text-2xl">N</span>ous
                  sommes profondément engagés envers la préservation de
                  l&apos;environnement. Toutes nos usines, situées en France, opèrent
                  selon des normes strictes d&apos;éco-responsabilité. Nous
                  privilégions l&apos;utilisation de matériaux recyclés, tels que des
                  palettes de bois récupérées, pour minimiser notre empreinte
                  carbone. Chaque étape de la fabrication de nos meubles est
                  soigneusement pensée pour réduire notre impact sur
                  l&apos;environnement, tout en assurant une qualité exceptionnelle.
                  Optez pour des meubles qui allient élégance et respect de la
                  planète.
                </p>
              </div>
              <div className="w-1/2">
                <Image
                  src="/img/environnement.jpg"
                  alt="image cote valeurs"
                  width={810}
                  height={810}
                  className="p-16"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
