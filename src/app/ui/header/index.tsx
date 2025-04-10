"use client";

import Link from "next/link";

const link_style = "text-black no-underline hover:opacity-50";

export const Header = () => {
  return (
    <header
      className="
        grid justify-around sticky t-0 z-10
        sm:grid-cols-1 md:grid-cols-[repeat(5,max-content)]"
    >
      <Link href="#main" className={link_style}>
        Главная
      </Link>
      <Link href="#recommendations" className={link_style}>
        Советы
      </Link>
      <Link href="#" className="text-black no-underline mx-15">
        Sleppy
      </Link>
      <Link href="#facts" className={link_style}>
        Факты о сне
      </Link>
      <Link href="#contacts" className={link_style}>
        Контакты
      </Link>
    </header>
  );
};
