"use client";

import { About } from "../about";
import { Facts } from "../facts";
import { Recommendations } from "../recommendations";

export const Main = () => {
  return (
    <main id="main">
      <About />
      <Facts />
      <Recommendations />
      <div>Contacts</div>
    </main>
  );
};
