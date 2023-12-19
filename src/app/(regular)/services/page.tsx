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
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bodoni text-white text-5xl">
            Nos services
          </div>
        </div>
        <section className="bg-slate-200 flex flex-col items-center">
          <div className="max-w-7xl">
            <div className="flex items-center flex-col">
              <div className="w-full max-w-2xl my-6">
                <h2 className="text-3xl font-bodoni font-bold mb-4">
                  Nos services
                </h2>
                <p className="text-justify mr-4">
                  <span className="font-bodoni font bold text-2xl">C</span>
                  hanger de mobilier, c’est souvent repenser l’ensemble de son
                  intérieur. C’est pourquoi les conseillers Astetu prennent le
                  temps de vous accompagner. Grâce à nos différentes solutions,
                  vous pourrez visualiser nos meubles dans vos pièces. En effet,
                  nous vous proposons de réaliser des plans d’agencement 2D/3D,
                  afin que votre futur mobilier trouve sa juste place… et même
                  de relooker une pièce du sol au plafond en ajoutant une photo
                  de votre extérieur pour plus de réalisme. Créer l’harmonie
                  dans un intérieur, c’est l’art de jouer avec les volumes, les
                  matières et les couleurs.
                </p>
              </div>
              <div className="w-full">
                <Image
                  src="/img/services.png"
                  alt="image dessous services"
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
