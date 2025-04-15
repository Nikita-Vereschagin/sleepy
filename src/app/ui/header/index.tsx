"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const link_style =
  "h-full box-border md:py-5 text-lg font-light text-center duration-500 hover:bg-black/5 md:text-base md:active:bg-black/5";

export const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isClosed, setClosed] = useState(true);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="grid justify-around w-full py-5 text-black md:py-0 no-underlin md:grid-cols-5">
      {width >= 768 ? (
        <>
          <Link href="#main" className={link_style}>
            Главная
          </Link>
          <Link href="#recommendations" className={link_style}>
            Советы
          </Link>
          <Link
            href="#"
            className="flex justify-center items-center box-border text-[#4400b2] font-black text-4xl pb-1.5 duration-500 hover:scale-90 md:active:scale-90"
          >
            Sleppy
          </Link>
          <Link href="#facts" className={link_style}>
            Факты о сне
          </Link>
          <Link href="#contacts" className={link_style}>
            Контакты
          </Link>
        </>
      ) : (
        <>
          <button
            onClick={() => setClosed(!isClosed)}
            className="flex justify-center items-center box-border text-[#4400b2] font-black text-4xl pb-1.5 duration-500 hover:scale-90 md:active:scale-90"
          >
            Sleppy
          </button>
          <div
            className={`grid justify-around w-full grid-cols-1 h-0 ${
              isClosed ? "hidden" : "h-max gap-y-5"
            }`}
          >
            <Link
              href="#main"
              className={link_style}
              onClick={() => setClosed(!isClosed)}
            >
              Главная
            </Link>
            <Link
              href="#recommendations"
              className={link_style}
              onClick={() => setClosed(!isClosed)}
            >
              Советы
            </Link>
            <Link
              href="#facts"
              className={link_style}
              onClick={() => setClosed(!isClosed)}
            >
              Факты о сне
            </Link>
            <Link
              href="#contacts"
              className={link_style}
              onClick={() => setClosed(!isClosed)}
            >
              Контакты
            </Link>
          </div>
        </>
      )}
    </header>
  );
};
