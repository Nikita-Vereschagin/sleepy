"use client";

const data = [
  {
    title: "Недостаток сна и здоровье",
    description:
      "Регулярный недосып может привести к серьёзным заболеваниям, таким как ожирение и диабет.",
  },
  {
    title: "Распространённость проблем со сном",
    description:
      "По статистике, около 30% взрослого населения страдают от нарушений сна.",
  },
  {
    title: "Сон и когнитивные функции",
    description:
      "Качественный сон улучшает память, концентрацию и способность к обучению.",
  },
  {
    title: "Влияние сна на настроение",
    description:
      "Хороший сон помогает поддерживать эмоциональное равновесие и снижает уровень стресса.",
  },
];

export const Facts = () => {
  return (
    <section className="px-10 mt-30" id="facts">
      <h2 className="text-5xl font-semibold text-center">
        Статистика сна: немая эпидемия
      </h2>
      <p className="w-[80%] m-auto text-center mt-10 mb-15">
        Изучите удивительную статистику, которая показывает, насколько
        распространены проблемы со сном и как они влияют на людей и общество.
        Поймите, почему недосып - это серьезная проблема.
      </p>
      <ul className="grid grid-cols-2 gap-10">
        {data.map((card, i) => {
          return (
            <li
              className="grid gap-y-1 grid-rows-[max-content_1fr]  box-border px-10 py-5 rounded-[10px] duration-500 hover:bg-[#f6f0ff]"
              key={i}
            >
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="">{card.description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
