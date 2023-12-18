"use client"

import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";

const categories = ["Bois", "Composite", "Plastique", "Immitation bois"];

const Filters = () => {
  const checkboxes = categories.map((name) => {
    return (
      <li className="flex items-center space-x-2" key={name}>
        <Checkbox id={name} />
        <label
          htmlFor={name}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {name}
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
        <CardHeader className="font-bold text-lg">Price Range</CardHeader>
        <CardContent>
          <Input className="w-full" max="500" min="0" type="range" />
        </CardContent>
      </Card>
    </>
  );
};

export default Filters;
