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
      <h2 className="text-5xl font-semibold text-center mt-25">Наша комнада</h2>
      <p className="w-[80%] m-auto text-center my-10">
        Наша команда эксперты, посвятившие себя изучению здорового сна и
        созданию инновационных решений для улучшения качества жизни людей.
      </p>

      <ul className="grid grid-cols-[repeat(6,max-content)] grid-rows-1 gap-x-5 justify-center overflow-hidden">
        {data.map((card, i) => {
          return (
            <li
              className="grid items-center grid-cols-[max-content_1fr] rounded-full 
              hover:[&_div]:opacity-100 hover:pr-10 hover:gap-x-5 hover:[&_div]:w-25 hover:bg-[#f6f0ff] 
              active:[&_div]:w-25 active::pr-10 active:bg-[#f6f0ff] active:[&_div]:opacity-100 active:gap-x-5"
              key={i}
            >
              <Image
                src={card.src}
                alt="Фотография"
                className="object-cover rounded-full w-50 aspect-square"
              />
              <div className={`${s.animate} w-0 duration-1000 opacity-0`}>
                <h4 className="text-2xl font-semibold">{card.title}</h4>
                <p className="">{card.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <p className="w-[80%] m-auto text-center my-15">
        Мы объединили опыт сомнологов, психологов, технологов и дизайнеров,
        чтобы создать комплексный подход к проблеме недосыпа и некачественного
        отдыха. Наша миссия - помочь каждому человеку раскрыть потенциал
        полноценного сна через научные знания и современные технологии.
      </p>
    </section>
  );
};
