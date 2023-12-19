import Filters from "@/components/filters";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Lit",
    description:
      "Lit en bois de palettes recyclées, alliant robustesse et style industriel avec ses pieds en fer recyclé. Doté d'un tiroir coulissant pour un rangement aisé, il offre également un espace sous le lit pour y glisser une table basse. Sa teinte chaleureuse et sa finition en vernis acrylique en font une pièce élégante et pratique.",
    price: 139.99,
    dimensions: "2620x1100x709",
    img: "/img/lit.png",
    href: "lit",
  },
  {
    name: "Table de chevet",
    description:
      "Table de chevet minimaliste assemblée à partir de quatre pièces de bois de palette, offrant un rangement discret pour vos essentiels. Sa fabrication en bois de palette assure une esthétique à la fois naturelle et éclectique.",
    price: 29.99,
    dimensions: "300x400x500",
    img: "/img/table-chevet.png",
    href: "table-chevet",
  },
  {
    name: "Table basse",
    description:
      "Table basse en bois de palette, alliant robustesse et charme naturel, avec un couvercle ouvrant pour un rangement astucieux. Sa teinte chaleureuse et sa finition en vernis acrylique apportent une élégance intemporelle, tandis que ses roulettes recyclées de chaise de bureau lui confèrent un style éclectique unique.",
    price: 44.99,
    dimensions: "900x850x290",
    img: "/img/table-basse.png",
    href: "table-basse",
  },
];

export default function Home() {
  const productsItems = products.map((product) => {
    return (
      <div key={product.name} className="w-full flex justify-center">
        <Link href={"produits/" + product.href}>
          <Card className="w-[400px] min-w-[350px] hover:cursor-pointer hover:scale-110 hover:shadow-md hover:shadow-card-foreground transition-all flex flex-col">
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent className="">
              <div className="relative h-[400px]">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="rounded-md overflow-hidden object-contain"
                />
              </div>
              <p>{product.dimensions}</p>
              <br />
              <p>{product.description}</p>
            </CardContent>
            <CardFooter className="self-end h-full items-end">
              <p>{product.price} €</p>
            </CardFooter>
          </Card>
        </Link>
      </div>
    );
  });
  return (
    <div className="">
      <div className="w-full h-[100vh] flex items-center justify-center relative">
        <Image
          src="https://i.imgur.com/vlHt97c.png"
          alt="mobilier accueil"
          fill
          className="object-cover"
        />
        <h2 className="font-bodoni font-bold text-5xl z-10 absolute top-[50vh] -translate-y-full">
          La gamme 2023
        </h2>
      </div>
      <div className="w-full bg-slate-200 pb-[200px]">
        <div className="flex flex-col justify-start items-center m-auto w-full">
          <h2 className="text-3xl m-10">Les produits</h2>
          <div className="inline-grid grid-cols-1 sm:grid-cols-7 w-full">
            <aside className="col-span-2 flex flex-col items-center md:items-center justify-start">
              <Filters />
            </aside>
            <div className="col-span-4 grid grid-cols-1 2xl:grid-cols-2 gap-x-8 gap-y-16 justify-center">
              {productsItems}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
