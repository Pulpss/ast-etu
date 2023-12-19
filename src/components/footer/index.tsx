"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-2">Ast-Etu</h2>
            <ul className="space-y-1">
              <li>
                <Link className="text-gray-400 hover:text-white" href="/">
                  Nos produits
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-white" href="/valeurs">
                  Nos valeurs
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-white" href="/services">
                  Nos services
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-white" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Ressources</h2>
            <ul className="space-y-1">
              <li>
                <Link className="text-gray-400 hover:text-white" href="#">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-white" href="#">
                  Docs
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-white" href="#">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Suivez-nous</h2>
            <div className="flex space-x-4">
              <Link className="text-gray-400 hover:text-white" href="#">
                <FacebookIcon className="w-6 h-6" />
              </Link>
              <Link className="text-gray-400 hover:text-white" href="#">
                <TwitterIcon className="w-6 h-6" />
              </Link>
              <Link className="text-gray-400 hover:text-white" href="https://www.instagram.com/astetu2.0/">
                <InstagramIcon className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Button className="border-gray-40 hover:border-white text-black hover:text-gray-700" variant="outline">
            Abonnez-vous à notre newsletter
          </Button>
        </div>
      </div>
    </footer>
  )
}

function FacebookIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function TwitterIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
