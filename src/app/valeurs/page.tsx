import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="">
        <div className="w-full h-[100vh] flex items-center justify-start relative">
          <Image
            src="https://i.imgur.com/uXwUySw.png"
            alt="image fond valeurs"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
}
