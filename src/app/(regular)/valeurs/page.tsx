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
            Decouvrez nos valeurs
          </div>
        </div>
        <section className="bg-slate-200 flex flex-col items-center">
          <div className="max-w-7xl">
            <div className="flex items-center">
              <div className="w-1/2">
                <h2 className="text-3xl font-bodoni font-bold mb-4">
                  Nos valeurs
                </h2>
                <p className="text-justify mr-4">
                  <span className="font-bodoni font bold text-2xl">C</span>hez
                  AstEtu, la conception et la fabrication de nos meubles sont
                  guidées par l&apos;expertise de nos talentueux designers et
                  artisans. Leurs expériences leur permettent d&apos;allier un
                  savoir-faire traditionnel et une recherche constante de
                  nouvelles technologies. Nos experts sélectionnent
                  soigneusement chaque matériau, privilégiant la qualité et la
                  durabilité. À la pointe de l&apos;innovation, ils explorent de
                  nouvelles techniques pour créer des meubles qui allient
                  esthétisme et fonctionnalité, reflétant ainsi notre engagement
                  envers l&apos;excellence dans la conception et la fabrication.
                </p>
              </div>
              <div className="w-1/2">
                <Image
                  src="/img/valeurs.png"
                  alt="image cote valeurs"
                  width={810}
                  height={810}
                  className="p-16"
                />
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-1/2">
                <Image
                  src="/img/histoire.png"
                  alt="image cote histoire"
                  width={810}
                  height={810}
                  className="p-16"
                />
              </div>
              <div className="w-1/2">
                <h2 className="text-3xl font-bodoni font-bold mb-4">
                  Notre histoire
                </h2>
                <p className="text-justify mr-4">
                  <span className="font-bodoni font bold text-2xl">L</span>a
                  refonte de notre logo initiée en 2023 s&apos;appuie sur 3
                  maîtres-mots : modernité, élégance, lisibilité. De sa
                  typographie à sa couleur, il est désormais le socle de notre
                  identité visuelle. La table minimaliste stylisée qui le
                  complète est appelée à devenir le symbole de la marque. Si le
                  carré, élément identitaire fort dans l&apos;histoire de Mobilier de
                  France a été conservé, le bleu fait place à un vert nature.
                  Déclinée sur les réseaux sociaux et chaine youtube, cette
                  nouvelle charte rend nos magasins immédiatement identifiables.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-1/2">
                <h2 className="text-3xl font-bodoni font-bold mb-4">
                  Nos engagements
                </h2>
                <p className="text-justify mr-4">
                  <span className="font-bodoni font bold text-2xl">C</span>
                  onscients des défis financiers auxquels sont confrontés les
                  étudiants, nous nous engageons également à maintenir des prix
                  relativement bas. Chez AstEtu, nous croyons que la qualité ne
                  devrait pas compromettre l&apos;accessibilité. Ainsi, en proposant
                  des tarifs abordables, nous souhaitons rendre nos meubles
                  aussi accessibles que possible aux étudiants et à tous ceux
                  qui apprécient un design de qualité sans sacrifier leur
                  budget.
                </p>
              </div>
              <div className="w-1/2">
                <Image
                  src="/img/engagements.png"
                  alt="image cote engagements"
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
