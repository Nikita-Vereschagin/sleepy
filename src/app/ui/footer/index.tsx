"use client";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="grid w-full xl:grid-cols-2 bg-[#0d0d0d] text-white py-5 px-10 items-center justify-center">
      <div className="text-center xl:text-start">
        <p className="">
          Для дополнительной информации можете обратиться к нам в{" "}
          <Link href="#" className="font-medium text-orange-500">
            Telegram
          </Link>
        </p>
        <p className="py-5 xl:pb-0">© 2025 Sleepy</p>
      </div>
      <div className="flex flex-col items-center py-1 text-center border-t border-white xl:flex-row xl:pl-10 xl:border-s xl:border-t-0 xl:text-start">
        <p className="py-5 xl:py-0">
          Так же можете ознакомиться с нашим буклетом!
        </p>
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
