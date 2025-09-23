import { useState } from "react";
import { Breadcrumb } from "../components/Breadcrumb";
import { ArrowUpFromLine, Eye } from "lucide-react";

export function ProfilePage() {
  const [activeTab, setActiveTab] = useState("info");

  const tabs = [
    { id: "info", label: "Info personali" },
    { id: "destinazioni", label: "Destinazioni" },
    { id: "contatti", label: "Contatti" },
  ];

  return (
    <>
      <Breadcrumb />

      <h1 className="text-start font-bold text-2xl ml-8">Profilo</h1>

      <div className="flex gap-8 whitespace-nowrap ml-8 mt-4 w-[438px] border-b-2 border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-2 font-semibold text-2xl transition-colors relative ${
              activeTab === tab.id
                ? "text-black after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:bg-cyan-500"
                : "text-gray-400 hover:text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "info" && (
        <div className="flex justify-start items-start mt-6 gap-6 px-8 mb-6">
          {/* Colonna sinistra */}
          <div className="flex flex-col gap-6">
            {/* Foto profilo */}
            <div className="bg-white w-64 h-72 rounded-2xl shadow-md flex-shrink-0">
              <h2 className="font-bold text-xl my-5 mx-5">Foto profilo</h2>
              <div className="flex justify-center items-center">
                <div className="flex flex-col justify-center items-center bg-gray-100 border-2 border-dashed border-gray-400 rounded-xl w-52 h-52 p-4">
                  <ArrowUpFromLine className="text-gray-500 mb-3" size={64} />
                  <h3 className="font-bold text-lg text-center">Aggiorna foto</h3>
                  <p className="font-semibold text-[13px] text-center text-gray-400 mt-1 whitespace-nowrap">
                    PNG, JPG e GIF sono permessi
                  </p>
                </div>
              </div>
            </div>

            {/* Colore interfaccia */}
            <div className="bg-white w-64 rounded-2xl shadow-md p-5 flex flex-col items-center">
              <h2 className="font-bold text-xl my-4 text-start self-start">
                Colore interfaccia
              </h2>
              <p className="font-semibold text-sm text-start text-gray-400 mt-1">
                Personalizza la tua interfaccia scegliendo il colore che più rappresenta il tuo profilo
              </p>
              <div className="grid grid-cols-3 gap-3 my-6">
                <div className="w-16 h-16 rounded-full bg-cyan-400"></div>
                <div className="w-16 h-16 rounded-full bg-cyan-400"></div>
                <div className="w-16 h-16 rounded-full bg-gray-400"></div>
                <div className="w-16 h-16 rounded-full bg-gray-400"></div>
                <div className="w-16 h-16 rounded-full bg-gray-400"></div>
                <div className="w-16 h-16 rounded-full bg-gray-400"></div>
              </div>
            </div>
          </div>

          {/* Colonna centrale - informazioni account */}
          <div className="flex-[1.5]">
            <form className="p-6 rounded-xl bg-white/90 shadow-lg mb-6">
              <h2 className="text-2xl font-bold mb-6 text-black text-start">
                Informazioni account
              </h2>

              <div className="grid grid-cols-2 gap-4 mb-5">
                <div>
                  <label htmlFor="nome" className="block mb-2 text-sm font-medium text-black">
                    Nome*
                  </label>
                  <input
                    type="text"
                    id="nome"
                    placeholder="Pierluigi"
                    className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5 focus:ring-1 focus:ring-black focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="cognome" className="block mb-2 text-sm font-medium text-black">
                    Cognome*
                  </label>
                  <input
                    type="text"
                    id="cognome"
                    placeholder="Papa"
                    className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5 focus:ring-1 focus:ring-black focus:outline-none"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="pierluigi@email.com"
                  className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5 focus:ring-1 focus:ring-black focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-5">
                <div>
                  <label htmlFor="regione" className="block mb-2 text-sm font-medium text-black">
                    Regione
                  </label>
                  <input
                    type="text"
                    id="regione"
                    className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5 focus:ring-1 focus:ring-black focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="cap" className="block mb-2 text-sm font-medium text-black">
                    CAP
                  </label>
                  <input
                    type="text"
                    id="cap"
                    className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5 focus:ring-1 focus:ring-black focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-5">
                <div>
                  <label htmlFor="provincia" className="block mb-2 text-sm font-medium text-black">
                    Provincia
                  </label>
                  <input
                    type="text"
                    id="provincia"
                    className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5 focus:ring-1 focus:ring-black focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="citta" className="block mb-2 text-sm font-medium text-black">
                    Città
                  </label>
                  <input
                    type="text"
                    id="citta"
                    className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5 focus:ring-1 focus:ring-black focus:outline-none"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="indirizzo" className="block mb-2 text-sm font-medium text-black">
                  Indirizzo
                </label>
                <input
                  type="text"
                  id="indirizzo"
                  placeholder="Via Grottaglie, 1"
                  className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5 focus:ring-1 focus:ring-black focus:outline-none"
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-gray-300 text-black px-24 py-4 font-semibold rounded-lg"
                >
                  Invia
                </button>
              </div>
            </form>
          </div>

          <div className="flex-1">
            <form className="p-6 rounded-xl bg-white/90 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-black text-start">
                Cambia password
              </h2>

              <div className="mb-5">
                <label htmlFor="vecchiapassword" className="block mb-2 text-sm font-medium text-black">
                  Vecchia password*
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="vecchiapassword"
                    placeholder="Password"
                    className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5 pr-10 focus:ring-1 focus:ring-black focus:outline-none"
                  />
                  <Eye className="absolute inset-y-0 right-3 w-5 h-5 my-auto text-gray-300 cursor-pointer" />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="nuovapassword" className="block mb-2 text-sm font-medium text-black">
                  Nuova password*
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="nuovapassword"
                    placeholder="Password"
                    className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5 pr-10 focus:ring-1 focus:ring-black focus:outline-none"
                  />
                  <Eye className="absolute inset-y-0 right-3 w-5 h-5 my-auto text-gray-300 cursor-pointer" />
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-gray-300 text-black px-16 py-4 font-bold text-md rounded-lg"
                >
                  Salva Password
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
