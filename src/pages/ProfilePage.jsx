import { useState } from "react";
import { Breadcrumb } from "../components/Breadcrumb";
import { ArrowUpFromLine, Eye, Search } from "lucide-react";
import { InformazioniAccount } from "../components/InformazioniAccount";
import { ModalInformazioniAccount } from "../components/ModalInformazioniAccount";
import { ModalNuovoContatto } from "../components/ModalNuovoContatto";
import { FooterDashboard } from "../components/FooterDashboard";

export function ProfilePage() {
  const [activeTab, setActiveTab] = useState("info");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalNuovoContattoOpen, setIsModalNuovoContattoOpen] = useState(false);

  const tabs = [
    { id: "info", label: "Info personali" },
    { id: "destinazioni", label: "Destinazioni" },
    { id: "contatti", label: "Contatti" },
  ];

  const [gamingStores, setGamingStores] = useState([
    {
      numero: 1,
      descrizione: "GameZone Online - Console & Accessori",
      indirizzo: "Via Appia Nuova 123",
      localita: "Roma",
      telefono: "+39 06 1234567",
      email: "info@gamezone.it",
      preferiti: true,
    },
    {
      numero: 2,
      descrizione: "PixelShop - PC Gaming & Componenti",
      indirizzo: "Corso Vittorio Emanuele 45",
      localita: "Milano",
      telefono: "+39 02 7654321",
      email: "support@pixelshop.it",
      preferiti: false,
    },
    {
      numero: 3,
      descrizione: "LevelUp Store - Giochi Digitali",
      indirizzo: "Rue de Rivoli 87",
      localita: "Parigi",
      telefono: "+33 1 44556677",
      email: "contact@levelup.fr",
      preferiti: true,
    },
    {
      numero: 4,
      descrizione: "NextGen Gaming - Accessori VR",
      indirizzo: "Oxford Street 250",
      localita: "Londra",
      telefono: "+44 20 79460000",
      email: "sales@nextgenuk.co.uk",
      preferiti: false,
    },
    {
      numero: 5,
      descrizione: "Gamer's Paradise - Retrogaming",
      indirizzo: "Gran Via 102",
      localita: "Madrid",
      telefono: "+34 91 9876543",
      email: "paradise@gamers.es",
      preferiti: true,
    },
  ]);
  
  const [clientiGaming, setClientiGaming] = useState([
    {
      referente: "Vendite",
      nominativo: "Alessandro Neri",
      telefono: "3341122334",
      email: "contatti@levelupstore.it",
      news: true,
      wapp: true,
      info: false,
      c_ord: true,
      ddt: false,
      fatt: true,
      a_ord: false,
    },
    {
      referente: "Vendite",
      nominativo: "Giulia Conti",
      telefono: "3492233445",
      email: "support@gamersparadise.it",
      news: false,
      wapp: true,
      info: true,
      c_ord: false,
      ddt: true,
      fatt: false,
      a_ord: true,
    },
    {
      referente: "Vendite",
      nominativo: "Matteo Lombardi",
      telefono: "3209988776",
      email: "info@consoleworld.it",
      news: true,
      wapp: false,
      info: true,
      c_ord: true,
      ddt: true,
      fatt: false,
      a_ord: false,
    },
    {
      referente: "Vendite",
      nominativo: "Sara Galli",
      telefono: "3336677889",
      email: "sales@pixelgaming.it",
      news: false,
      wapp: false,
      info: false,
      c_ord: true,
      ddt: false,
      fatt: true,
      a_ord: true,
    },
    {
      referente: "Vendite",
      nominativo: "Davide Moretti",
      telefono: "3284455667",
      email: "retro@retroitalia.it",
      news: true,
      wapp: true,
      info: true,
      c_ord: false,
      ddt: true,
      fatt: true,
      a_ord: false,
    },
  ]);

  const togglePreferito = (numero) => {
    setGamingStores((prevStores) =>
      prevStores.map((store) =>
        store.numero === numero
          ? { ...store, preferiti: !store.preferiti }
          : store
      )
    );
  };

  const toggleCampo = (index, campo) => {
    setClientiGaming((prev) =>
      prev.map((cliente, i) =>
        i === index
          ? { ...cliente, [campo]: !cliente[campo] }
          : cliente
      )
    );
  };

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
          <div className="flex flex-col gap-6">
            <div className="bg-white w-64 h-72 rounded-2xl flex-shrink-0">
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

            <div className="bg-white w-64 rounded-2xl p-5 flex flex-col items-center">
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

          <InformazioniAccount />

          <div className="flex-1">
            <form className="p-6 rounded-xl bg-white/90">
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
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5 pr-10 focus:ring-1 focus:ring-black focus:outline-none"
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
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5 pr-10 focus:ring-1 focus:ring-black focus:outline-none"
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

      {activeTab === "destinazioni" && (
        <div className="flex flex-col gap-6 mt-6 px-8 mb-6">
          <div className="flex items-center gap-6">
            <div className="bg-white w-80 h-24 rounded-2xl flex justify-center items-center">
              <button
                className="bg-ciano text-white font-semibold px-8 py-4 rounded-xl"
                onClick={() => setIsModalOpen(true)}
              >
                Nuova destinazione
              </button>
            </div>

            <div className="relative bg-white p-4 rounded-2xl">
              <Search className="absolute left-7 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="cerca codice"
                className="w-[500px] pl-10 bg-gray-50 border border-gray-300 text-black text-sm rounded-lg h-10"
              />
            </div>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl ml-[335px]">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">#NUMERO</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">DESCRIZIONE</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">INDIRIZZO</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">LOCALITÀ</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">TELEFONO</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">EMAIL</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">PREFERITI</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {gamingStores.map((store) => (
                  <tr key={store.numero}>
                    <td className="px-6 py-4 text-sm font-bold text-gray-900">{store.numero}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{store.descrizione}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{store.indirizzo}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{store.localita}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{store.telefono}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{store.email}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={store.preferiti}
                          onChange={() => togglePreferito(store.numero)}
                          className="h-4 w-4 text-ciano border-gray-300 rounded"
                        />
                        <span className="text-gray-500">Preferito</span>
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "contatti" && (
        <div className="flex flex-col gap-6 mt-6 px-8 mb-6">
          <div className="flex items-center gap-6">
            <div className="bg-white w-80 h-24 rounded-2xl flex justify-center items-center">
              <button
                className="bg-ciano text-white font-semibold px-8 py-4 rounded-xl"
                onClick={() => setIsModalNuovoContattoOpen(true)}
              >
                Nuovo contatto
              </button>
            </div>

            <div className="relative bg-white p-4 rounded-2xl">
              <Search className="absolute left-7 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="cerca contatto"
                className="w-[500px] pl-10 bg-gray-50 border border-gray-300 text-black text-sm rounded-lg h-10"
              />
            </div>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl ml-[335px]">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">REFERENTE</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">NOMINATIVO</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">TELEFONO</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">EMAIL</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">NEWS</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">WAPP</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">INFO</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">C.ORD</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">DDT</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">FATT</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">A.ORD</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {clientiGaming.map((cliente, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm font-bold text-gray-900 uppercase">{cliente.referente}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{cliente.nominativo}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{cliente.telefono}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{cliente.email}</td>
                    {["news","wapp","info","c_ord","ddt","fatt","a_ord"].map((campo) => (
                      <td key={campo} className="px-6 py-4 text-sm text-gray-900">
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={cliente[campo]}
                            onChange={() => toggleCampo(index, campo)}
                            className="h-4 w-4 text-ciano border-gray-300 rounded"
                          />
                        </label>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <ModalInformazioniAccount
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <ModalNuovoContatto
        isOpen={isModalNuovoContattoOpen}
        onClose={() => setIsModalNuovoContattoOpen(false)}
      />

      <FooterDashboard></FooterDashboard>
    </>
  );
}
