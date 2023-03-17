import React from "react";
import { MainHome } from "../components/mainHome";
import { FeaturedProducts } from "../components/featuredProducts";
import { Services } from "../components/services";

export const Home = () => {
  return (
    <main>
      <MainHome />
      <FeaturedProducts />
      <Services />
    </main>
  );
};
