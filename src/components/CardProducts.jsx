import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { ModalCardProduct } from "./ModalCardProduct";

import eaFc26 from "../assets/img/EA_FC_26.webp";
import CallOfDuty from "../assets/img/Call_Of_Duty_Modern_Warfare_III.webp";
import PS5 from "../assets/img/PS5.webp";
import XBOX from "../assets/img/XBOX.webp";
import Switch2 from "../assets/img/Nintendo-Switch-2.webp";
import Mouse from "../assets/img/Mouse.webp";
import Tastiera from "../assets/img/Tastiera.webp";
import Cuffie from "../assets/img/Cuffie.webp";
import Mouse1 from "../assets/img/Mouse_1.webp";
import Cuffie1 from "../assets/img/Cuffie_1.webp";
import { ShoppingCart } from 'lucide-react';


export function CardProducts() {
  const products = [
  {
    nome: "EA FC 26",
    marca: "EA Sports",
    prezzo: "€69,99",
    categoria: "Giochi",
    img: eaFc26,
    consoleDisponibili: ["PlayStation 5", "Xbox Series X", "Nintendo Switch OLED"],
    descrizione: "L'ultimo capitolo della serie EA FC, con grafica migliorata, modalità carriera dettagliata e gameplay realistico."
  },
  {
    nome: "Call of Duty: Modern Warfare III",
    marca: "Activision",
    prezzo: "€69,99",
    categoria: "Giochi",
    img: CallOfDuty,
    consoleDisponibili: ["PlayStation 5", "Xbox Series X"],
    descrizione: "Spara in battaglie intense con campagne coinvolgenti e multiplayer competitivo all'avanguardia."
  },
  {
    nome: "PlayStation 5",
    marca: "Sony",
    prezzo: "€549,99",
    categoria: "Console",
    img: PS5,
    descrizione: "Console di nuova generazione con grafica 4K, tempi di caricamento rapidissimi e un catalogo esclusivo di giochi.",
    caratteristiche: {
      cpu: "AMD Ryzen Zen 2, 8 core a 3.5 GHz",
      gpu: "AMD RDNA 2, 10.28 TFLOPS",
      ram: "16 GB GDDR6",
      storage: "SSD NVMe 825 GB",
      risoluzione: "Fino a 8K",
      frameRate: "Fino a 120 fps",
      connettività: "HDMI 2.1, USB-C, Wi-Fi 6, Bluetooth 5.1"
    }
  },
  {
    nome: "Xbox Series X",
    marca: "Microsoft",
    prezzo: "€499,99",
    categoria: "Console",
    img: XBOX,
    descrizione: "Potente console next-gen con supporto a 4K e prestazioni elevate per tutti i giochi più recenti.",
    caratteristiche: {
      cpu: "AMD Ryzen Zen 2, 8 core a 3.8 GHz",
      gpu: "AMD RDNA 2, 12 TFLOPS",
      ram: "16 GB GDDR6",
      storage: "SSD NVMe 1 TB",
      risoluzione: "Fino a 8K",
      frameRate: "Fino a 120 fps",
      connettività: "HDMI 2.1, USB 3.1, Wi-Fi 5, Ethernet"
    }
  },
  {
    nome: "Nintendo Switch 2",
    marca: "Nintendo",
    prezzo: "€469,99",
    categoria: "Console",
    img: Switch2,
    descrizione: "Console ibrida che permette di giocare sia in modalità portatile sia su TV, con giochi esclusivi Nintendo.",
    caratteristiche: {
      cpu: "NVIDIA Tegra custom",
      gpu: "Architettura NVIDIA Ampere",
      ram: "8 GB LPDDR5",
      storage: "64 GB interno, espandibile via microSD",
      risoluzione: "1080p TV, 720p portatile",
      frameRate: "Fino a 60 fps",
      connettività: "HDMI, USB-C, Wi-Fi, Bluetooth"
    }
  },
  {
    nome: "Logitech G502 HERO Mouse",
    marca: "Logitech",
    prezzo: "€59,99",
    categoria: "Periferiche",
    img: Mouse,
    descrizione: "Mouse da gaming ad alta precisione con sensore HERO 25K, personalizzabile e perfetto per FPS e MMO.",
    caratteristiche: {
      sensore: "HERO 25K",
      dpi: "100 – 25.600",
      pulsanti: "11 programmabili",
      peso: "121 g",
      connessione: "USB cablata"
    }
  },
  {
    nome: "Corsair K70 RGB MK.2 Tastiera",
    marca: "Corsair",
    prezzo: "€139,99",
    categoria: "Periferiche",
    img: Tastiera,
    descrizione: "Tastiera meccanica con retroilluminazione RGB, switch Cherry MX e struttura resistente in alluminio.",
    caratteristiche: {
      switch: "Cherry MX Red",
      retroilluminazione: "RGB dinamico",
      connessione: "USB 2.0",
      pollingRate: "1000 Hz",
      struttura: "Alluminio spazzolato"
    }
  },
  {
    nome: "SteelSeries Arctis 7 Cuffie Wireless",
    marca: "SteelSeries",
    prezzo: "€179,99",
    categoria: "Accessori",
    img: Cuffie,
    descrizione: "Cuffie wireless comode, con audio surround 7.1 e microfono ClearCast per comunicazioni cristalline.",
    caratteristiche: {
      connessione: "Wireless 2.4 GHz",
      autonomia: "Fino a 24 ore",
      audio: "Surround 7.1",
      microfono: "Retrattile ClearCast",
      compatibilità: "PC, PlayStation, Nintendo Switch"
    }
  },
  {
    nome: "Razer Naga X Mouse Gaming",
    marca: "Razer",
    prezzo: "€79,99",
    categoria: "Periferiche",
    img: Mouse1,
    descrizione: "Mouse da MMO ultra leggero con 16 pulsanti programmabili e sensore ottico preciso per ogni mossa.",
    caratteristiche: {
      sensore: "Razer 5G ottico",
      dpi: "16.000",
      pulsanti: "16 programmabili",
      peso: "85 g",
      connessione: "USB cablata"
    }
  },
  {
    nome: "HyperX Cloud II Cuffie",
    marca: "HyperX",
    prezzo: "€99,99",
    categoria: "Accessori",
    img: Cuffie1,
    descrizione: "Cuffie cablate con suono surround 7.1, comfort superiore e microfono rimovibile per gaming intenso.",
    caratteristiche: {
      connessione: "Jack 3.5mm / USB",
      audio: "Surround 7.1 virtuale",
      microfono: "Rimovibile, con cancellazione del rumore",
      peso: "320 g",
      compatibilità: "PC, PS5, Xbox Series X|S, Switch"
    }
  }
];


  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Tutti");
  const [consoleFilter, setConsoleFilter] = useState("Tutte");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const consoleOptions = Array.from(
    new Set(
      products
        .filter((p) => p.categoria === "Giochi")
        .flatMap((p) => p.consoleDisponibili || [])
    )
  );

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.nome.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "Tutti" || p.categoria === filter;

    const matchesConsole =
      p.categoria !== "Giochi" ||
      consoleFilter === "Tutte" ||
      p.consoleDisponibili?.includes(consoleFilter);

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
        consoleOptions={consoleOptions}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl w-full">
        {filteredProducts.map((product) => (
          <div
            key={product.nome}
            className="w-full max-w-sm bg-gray-600 rounded-2xl shadow-md overflow-hidden flex flex-col"
          >
            <img
              className="w-full h-60 object-cover rounded-t-2xl transition hover:scale-110"
              src={product.img}
              alt={product.nome}
            />

            <div className="px-6 pb-6 flex flex-col flex-1">
              <h4 className="text-lg font-semibold tracking-tight text-black mt-5">
                {product.nome}
              </h4>
              <p className="text-sm text-gray-300">{product.marca}</p>
              <span className="text-2xl font-bold text-green-400 my-4">
                {product.prezzo}
              </span>

              {product.categoria === "Giochi" && product.consoleDisponibili?.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.consoleDisponibili.map((console) => (
                    <span
                      key={console}
                      className="px-2 py-1 text-xs bg-gray-300 text-black rounded-full"
                    >
                      {console}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-auto flex gap-2 pt-4">
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="flex-1 text-center text-white bg-blu hover:bg-ciano hover:text-black transition duration-500 font-medium rounded-xl text-sm px-2 py-2"
                >
                  Dettagli
                </button>
               <button
                className="flex-1 flex items-center justify-center gap-2 text-black bg-giallo-1 hover:bg-giallo-2 transition duration-300 font-medium rounded-xl text-sm px-2 py-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                    Aggiungi al carrello
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ModalCardProduct product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  );
}
