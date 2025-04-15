"use client";

import { About } from "../about";
import { Contacts } from "../contacts";
import { Facts } from "../facts";
import { Recommendations } from "../recommendations";

export const Main = () => {
  return (
    <main id="main">
      <About />
      <Facts />
      <Recommendations />
      <Contacts />
    </main>
  );
};
