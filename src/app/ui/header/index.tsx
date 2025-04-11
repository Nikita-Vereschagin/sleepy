"use client";

import Link from "next/link";

const link_style =
  "h-full box-border py-5 text-lg font-light text-center duration-500 hover:bg-black/5";

export const Header = () => {
  return (
    <header
      className="
        grid justify-around w-full  
      text-black no-underlin
        sm:grid-cols-1 md:grid-cols-5"
    >
      <Link href="#main" className={link_style}>
        Главная
      </Link>
      <Link href="#recommendations" className={link_style}>
        Советы
      </Link>
      <Link
        href="#"
        className="flex justify-center items-center box-border text-[#4400b2] font-black text-4xl pb-1.5 duration-500 hover:scale-90"
      >
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
