"use client";

import Image from "next/image";

const data = [
  {
    src: "",
    title: "Имя Фамилия",
    description: "Описание",
  },
];

export const Contacts = () => {
  return (
    <section id="contacts" className="w-[100%]">
      <h2 className="text-5xl font-semibold text-center">Наша комнада</h2>
      <p className="w-[80%] m-auto text-center mt-10 mb-15">Описание</p>
      <ul className="grid grid-cols-2 gap-10">
        {data.map((card, i) => {
          return (
            <li
              className="grid gap-y-1 grid-cols-[max-content_1fr] box-border px-10 py-5 rounded-[10px] duration-500 hover:*:scale-x-100"
              key={i}
            >
              <Image src={card.src} alt="Фотография" className="round" />
              <div className="duration-200 scale-x-0">
                <h4 className="text-lg font-semibold">{card.title}</h4>
                <p className="">{card.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
