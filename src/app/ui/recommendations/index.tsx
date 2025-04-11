"use client";

const data = [
  {
    title: "",
    description: "",
  },
];

export const Recommendations = () => {
  return (
    <section id="recommendations" className="w-[100%] box-border px-5">
      <h2 className="font-semibold text-5xl text-center">
        Создайте условия для спокойного сна
      </h2>
      <p className="w-[80%] m-auto text-center mt-10 mb-15">
        Получите советы и стратегии для улучшения сна: создайте расслабляющий
        режим, оптимизируйте спальню и управляйте стрессом.
      </p>
      <ul className="grid grid-cols-2 gap-10">
        {data.map((card, i) => {
          return (
            <li
              className="grid gap-y-1 grid-rows-[max-content_1fr] bg-[#f6f0ff] box-border px-10 py-5 rounded-[10px] duration-500 hover:bg-[#d4bff3]"
              key={i}
            >
              <h3 className="font-semibold text-lg">{card.title}</h3>
              <p className="">{card.description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
