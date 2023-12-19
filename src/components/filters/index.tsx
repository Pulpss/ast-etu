"use client"

import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";

const categories = [
  {
    name: "Olivine",
    color: "#91b860"
  },
  {
    name: "Albâtre",
    color: "#dfe4d8"
  },
  {
    name: "Blanc",
    color: "#ffffff"
  },
  {
    name: "Bois",
    color: "#dfcaab"
  },
]

const Filters = () => {
  const checkboxes = categories.map((categorie) => {
    return (
      <li className="flex items-center space-x-2" key={categorie.name}>
        <Checkbox id={categorie.name} />
        <span className={"w-4 h-4 rounded-lg border"} style={{backgroundColor: categorie.color}}></span>
        <label
          htmlFor={categorie.name}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {categorie.name}
        </label>
      </li>
    );
  });
  return (
    <>
      <Card className="mb-4 w-[200px]">
        <CardHeader className="font-bold text-lg">Categories</CardHeader>
        <CardContent className="grid gap-2">
          <ul className="list-none flex space-y-2 flex-col">
            {checkboxes}
          </ul>
        </CardContent>
      </Card>
      <Card className="mb-4 w-[200px]">
        <CardHeader className="font-bold text-lg">Prix</CardHeader>
        <CardContent>
          <Input className="w-full" max="500" min="0" type="range" />
        </CardContent>
      </Card>
    </>
  );
};

export default Filters;
