"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full relative">
        <Image
          src="https://i.imgur.com/uXwUySw.png"
          alt="image fond valeurs"
          width={1920}
          height={540}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bodoni text-white text-5xl text-center">
          Contactez-nous
        </div>
      </div>
      <section className="bg-slate-200 p-8">
        <Card className="max-w-md mx-auto space-y-4 p-4">
          <CardHeader>
            <h2 className="text-2xl font-semibold">Nous contacter</h2>
            <p className="text-gray-600">
              Nous aimerions beaucoup entendre parler de vous. Envoyez-nous un
              message et nous vous répondrons dès que possible.
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nom</Label>
                <Input id="name" placeholder="Votre nom..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Votre email..." type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Sujet</Label>
                <Input id="subject" placeholder="Entrez le sujet..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  className="min-h-[100px]"
                  id="message"
                  placeholder="Votre message..."
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Soumettre</Button>
          </CardFooter>
        </Card>
      </section>
    </>
  );
}
