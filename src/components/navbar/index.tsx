"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

const sections = [
  {
    title: "Valeurs",
    href: "/valeurs",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "L'environnement",
    href: "/environnement",
  },
  {
    title: "Contactez-nous",
    href: "/contact",
  },
];

const produits = [
  {
    title: "Notre gamme 2021",
    description: "Découvrez notre gamme de produits pour l'année 2021",
    href: "/",
  },
  {
    title: "Notre gamme 2022",
    description: "Découvrez la gamme de l'année derniere",
    href: "/",
  },
  {
    title: "Notre gamme 2023",
    description: "Découvrez notre gamme la plus récente",
    href: "/",
  },
];

const Navbar = () => {
  const items = sections.map((section) => {
    return (
      <NavigationMenuItem key={section.title}>
        <Link href={section.href} passHref legacyBehavior>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {section.title}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    );
  });
  const produitsItems = produits.map((produit) => {
    return (
      <ListItem href={produit.href} title={produit.title} key={produit.title}>
        {produit.description}
      </ListItem>
    );
  });
  return (
    // floating at bottom
    <div className="fixed z-30 left-0 w-full top-4">
      <div className="rounded-md p-1 flex justify-center flex-col items-center">
        <div className="flex flex-row items-center justify-center">
          <span>
            <Image
              src="/logo_no_text.png"
              alt="logo no text"
              width={65}
              height={65}
            ></Image>
          </span>
          <h1 className="m-auto text-4xl font-bodoni font-bold">Ast-Etu</h1>
        </div>

        <NavigationMenu className="m-2">
          <NavigationMenuList className="space-x-3">
            {/* Produits */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Produits</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild className="relative">
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <Image
                          src="/logo.png"
                          alt="AstEtu logo"
                          fill
                          className="object-contain"
                        ></Image>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  {produitsItems}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* Normal links */}
            {items}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
