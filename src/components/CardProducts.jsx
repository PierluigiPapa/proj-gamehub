import { useState } from "react";
import { SearchBar } from "./SearchBar";
import eaFc26 from "../assets/img/EA_FC_26.webp";
import CallOfDuty from "../assets/img/Call_Of_Duty_Modern_Warfare_III.webp";
import PS5 from "../assets/img/PS5.webp";


export function CardProducts() {
  const products = [
    {
      nome: "EA FC 26",
      marca: "EA Sports",
      prezzo: "€69,99",
      categoria: "Giochi",
      img: eaFc26,
      consoleDisponibili: ["PlayStation 5", "Xbox Series X", "Nintendo Switch OLED"]
    },
    {
      nome: "Call of Duty: Modern Warfare III",
      marca: "Activision",
      prezzo: "€69,99",
      categoria: "Giochi",
      img: CallOfDuty,
      consoleDisponibili: ["PlayStation 5", "Xbox Series X"]
    },

    {
      nome: "PlayStation 5",
      marca: "Sony",
      prezzo: "€549,99",
      categoria: "Console",
      img: PS5
    },
    {
      nome: "Xbox Series X",
      marca: "Microsoft",
      prezzo: "€499,99",
      categoria: "Console",
      img: "https://m.media-amazon.com/images/I/61JGKhqxHxL._AC_SX679_.jpg"
    },
    {
      nome: "Nintendo Switch OLED",
      marca: "Nintendo",
      prezzo: "€349,99",
      categoria: "Console",
      img: "https://m.media-amazon.com/images/I/71z6pG0bH6L._AC_SX679_.jpg"
    },

    {
      nome: "Logitech G502 HERO Mouse",
      marca: "Logitech",
      prezzo: "€59,99",
      categoria: "Periferiche",
      img: "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SX679_.jpg"
    },
    {
      nome: "Corsair K70 RGB MK.2 Tastiera",
      marca: "Corsair",
      prezzo: "€139,99",
      categoria: "Periferiche",
      img: "https://m.media-amazon.com/images/I/81+o+HrlV-L._AC_SX679_.jpg"
    },
    {
      nome: "SteelSeries Arctis 7 Cuffie Wireless",
      marca: "SteelSeries",
      prezzo: "€179,99",
      categoria: "Accessori",
      img: "https://m.media-amazon.com/images/I/71n5gw6Jt6L._AC_SX679_.jpg"
    },
    {
      nome: "Razer Naga X Mouse Gaming",
      marca: "Razer",
      prezzo: "€79,99",
      categoria: "Periferiche",
      img: "https://via.placeholder.com/300x200"
    },
    {
      nome: "HyperX Cloud II Cuffie",
      marca: "HyperX",
      prezzo: "€99,99",
      categoria: "Accessori",
      img: "https://via.placeholder.com/300x200"
    }
  ];

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Tutti");
  const [consoleFilter, setConsoleFilter] = useState("Tutte");

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.nome.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "Tutti" || p.categoria === filter;

    const matchesConsole =
      filter !== "Giochi" ||
      consoleFilter === "Tutte" ||
      (p.consoleDisponibili && p.consoleDisponibili.includes(consoleFilter));

    return matchesSearch && matchesFilter && matchesConsole;
  });

  return (
    <section className="flex flex-col items-center my-16 w-full px-4">
      <SearchBar
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        consoleFilter={consoleFilter}
        setConsoleFilter={setConsoleFilter}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl w-full">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className="w-full max-w-sm bg-gray-600 border border-gray-200 rounded-2xl shadow-md overflow-hidden mx-auto flex flex-col"
          >
            <a href="#">
              <img
                className="rounded-t-2xl object-cover w-full h-60 mb-5"
                src={product.img}
                alt={product.nome}
              />
            </a>

            <div className="px-6 pb-6 flex flex-col flex-1">
              <h4 className="text-lg font-semibold tracking-tight text-black line-clamp-2">{product.nome}</h4>
              <p className="text-sm text-gray-300">{product.marca}</p>
            <span className="text-2xl font-bold text-ciano-2 mt-2">{product.prezzo}</span>


              {product.categoria === "Giochi" && product.consoleDisponibili && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.consoleDisponibili.map((consoleName, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-gray-300 text-black rounded-full"
                    >
                      {consoleName}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-auto flex gap-2 pt-4">
                <a
                  href="#"
                  className="flex-1 text-center text-white bg-blu hover:bg-ciano hover:text-black font-medium rounded-xl text-sm px-2 py-2 transition duration-500"
                >
                  Dettagli
                </a>
                <a
                  href="#"
                  className="flex-1 text-center text-black bg-giallo-1 hover:bg-giallo-2 font-medium rounded-xl text-sm px-2 py-2 transition duration-500"
                >
                  Aggiungi al carrello
                </a>
              </div>
            </div>
          </div>
        ))}

        {filteredProducts.length === 0 && (
          <p className="col-span-full text-center text-gray-400">Nessun prodotto trovato.</p>
        )}
      </div>
    </section>
  );
}
