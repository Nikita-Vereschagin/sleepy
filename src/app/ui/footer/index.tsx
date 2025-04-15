"use client";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="grid grid-cols-2 grid-rows-1 bg-[#0d0d0d] text-white w-full py-5 px-10 items-center">
      <div>
        <p>
          Для дополнительной информации можете обратиться к нам в{" "}
          <Link href="#" className="font-medium text-orange-500">
            Telegram
          </Link>
        </p>
        <p className="pt-5">© 2025 Sleepy</p>
      </div>
      <div className="flex items-center pl-10 border-white border-s">
        <p>Так же можете ознакомиться с нашим буклетом!</p>
        <Link
          className="flex border border-[#f6f0ff] w-max rounded-2xl py-5 h-min px-10 duration-300 hover:bg-[#f6f0ff] hover:text-black mx-auto"
          href="Буклет.docx"
          target="_blank"
          download
        >
          Скачать буклет
        </Link>
      </div>
    </footer>
  );
};
