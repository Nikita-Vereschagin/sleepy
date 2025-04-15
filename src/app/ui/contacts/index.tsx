"use client";

import Image from "next/image";
import egor from "../../../../public/egor.jpg";
import lera from "../../../../public/lera.jpg";
import alina from "../../../../public/alina.jpg";
import liza from "../../../../public/liza.jpg";
import adel from "../../../../public/adel.jpg";
import nikita from "../../../../public/nikita.jpg";
import s from "./index.module.css";

const data = [
  {
    src: egor,
    title: "Егор",
    description: "Разведчик",
  },
  {
    src: lera,
    title: "Лера",
    description: "Оценщик",
  },
  {
    src: alina,
    title: "Алина",
    description: "Коллективист",
  },
  {
    src: liza,
    title: "Лиза",
    description: "Исполнитель",
  },
  {
    src: adel,
    title: "Адель",
    description: "Доводчик",
  },
  {
    src: nikita,
    title: "Никита",
    description: "Коллективист",
  },
];

export const Contacts = () => {
  return (
    <section id="contacts" className="w-[100%]">
      <h2 className="mt-10 text-3xl font-semibold text-center lg:text-5xl md:mt-25">
        Наша комнада
      </h2>
      <p className="w-[80%] m-auto lg:text-xl text-center mt-5 mb-10 md:my-10">
        Наша команда эксперты, посвятившие себя изучению здорового сна и
        созданию инновационных решений для улучшения качества жизни людей.
      </p>

      <ul className="grid xl:grid-cols-[repeat(6,max-content)] grid-rows-1 gap-5 justify-center overflow-hidden md:grid-cols-[max-content_max-content]">
        {data.map((card, i) => {
          return (
            <li
              className="grid items-center grid-cols-[max-content_1fr] gap-x-5
              xl:gap-0 xl:hover:[&_div]:opacity-100 xl:hover:pr-10 xl:hover:gap-x-5 xl:hover:[&_div]:w-25"
              key={i}
            >
              <Image
                src={card.src}
                alt="Фотография"
                className="object-cover rounded-full w-50 aspect-square md:w-40"
              />
              <div
                className={`${s.animate} xl:w-0 duration-1000 xl:opacity-0 w-25`}
              >
                <h4 className="text-2xl font-semibold">{card.title}</h4>
                <p className="">{card.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <p className="w-[80%] m-auto lg:text-xl text-center my-15">
        Мы объединили опыт сомнологов, психологов, технологов и дизайнеров,
        чтобы создать комплексный подход к проблеме недосыпа и некачественного
        отдыха. Наша миссия - помочь каждому человеку раскрыть потенциал
        полноценного сна через научные знания и современные технологии.
      </p>
    </section>
  );
};
