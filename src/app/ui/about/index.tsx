"use client";

import Image from "next/image";
import Link from "next/link";
import bg from "../../../../public/bg_main.jpg";

export const About = () => {
  return (
    <section className="w-[100%] box-border px-5">
      <div className="relative">
        <Image
          src={bg}
          className="object-cover h-[90vh] rounded-[20px]"
          alt="Ошибка"
        />
        <div className="absolute flex flex-col justify-center items-center inset-0 bg-black/65 text-white text-center w-[100%] h-[100%] rounded-[20px] duration-500 hover:bg-black/40">
          <h1 className="font-bold text-7xl md:text-5xl">Раскройте силу сна</h1>
          <p className="w-[75%] font-light text-xl my-10 md:text-base">
            Узнайте, как, уделяя внимание сну, вы можете улучшить свое здоровье,
            самочувствие и качество жизни в целом. Познакомьтесь с наукой сна и
            научитесь формировать здоровые привычки сна.
          </p>
          <Link
            href="#facts"
            className="flex w-[max-content] py-[20px] px-[60px] bg-[#4400b2] font-medium rounded-[30px] duration-1000 hover:scale-95"
          >
            Узнать больше
          </Link>
        </div>
      </div>
    </section>
  );
};
