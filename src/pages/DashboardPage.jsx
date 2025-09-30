import { useEffect, useState } from "react";
import { Breadcrumb } from "../components/Breadcrumb";
import { Euro, ChevronDown, ChevronUp } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { FooterDashboard } from "../components/FooterDashboard";

export function DashboardPage() {
  useEffect(() => {
    document.body.classList.add("dashboard-body");
    return () => {
      document.body.classList.remove("dashboard-body");
    };
  }, []);

  const ordiniAttivi = [
    { documento: 'ORD-A1B2', riferimento: 'Mario Rossi', data: '01/09/2025' },
    { documento: 'ORD-C3D4', riferimento: 'Luigi Bianchi', data: '02/09/2025' },
    { documento: 'ORD-E5F6', riferimento: 'Anna Verdi', data: '03/09/2025' },
    { documento: 'ORD-G7H8', riferimento: 'Paolo Neri', data: '04/09/2025' },
    { documento: 'ORD-I9J0', riferimento: 'Sara Blu', data: '05/09/2025' },
    { documento: 'ORD-K1L2', riferimento: 'Carlo Rosa', data: '06/09/2025' },
  ];

  const ordiniBloccati = [
    { documento: 'BLK-M3N4', riferimento: 'Carla Neri', data: '07/09/2025' },
    { documento: 'BLK-O5P6', riferimento: 'Paolo Gialli', data: '08/09/2025' },
    { documento: 'BLK-Q7R8', riferimento: 'Sara Blu', data: '09/09/2025' },
    { documento: 'BLK-S9T0', riferimento: 'Luca Arancio', data: '10/09/2025' },
    { documento: 'BLK-U1V2', riferimento: 'Chiara Azzurri', data: '11/09/2025' },
  ];

  const ordiniEvasi = [
    { documento: 'EVS-W3X4', riferimento: 'Francesco Marrone', data: '12/09/2025' },
    { documento: 'EVS-Y5Z6', riferimento: 'Elena Rosa', data: '13/09/2025' },
    { documento: 'EVS-A7B8', riferimento: 'Giovanni Viola', data: '14/09/2025' },
    { documento: 'EVS-C9D0', riferimento: 'Marco Verde', data: '15/09/2025' },
  ];

  const preventivi = [
    { documento: 'PRE-E1F2', riferimento: 'Luca Arancio', data: '16/09/2025' },
    { documento: 'PRE-G3H4', riferimento: 'Chiara Azzurri', data: '17/09/2025' },
    { documento: 'PRE-I5J6', riferimento: 'Marco Verde', data: '18/09/2025' },
    { documento: 'PRE-K7L8', riferimento: 'Marco Rossi', data: '19/09/2025' },
    { documento: 'PRE-M9N0', riferimento: 'Paolo Blu', data: '20/09/2025' },
  ];

  const tables = [
    { title: 'Ordini attivi', data: ordiniAttivi, buttonText: 'Tracking' },
    { title: 'Ordini bloccati', data: ordiniBloccati, buttonText: 'Sblocca' },
    { title: 'Ordini evasi', data: ordiniEvasi, buttonText: 'Visualizza' },
    { title: 'Preventivi', data: preventivi, buttonText: 'Preventivo' },
  ];

  const [openTables, setOpenTables] = useState({});
  const [expandedTables, setExpandedTables] = useState({});

  const toggleTable = (index) => setOpenTables(prev => ({ ...prev, [index]: !prev[index] }));
  const toggleExpandTable = (index) => setExpandedTables(prev => ({ ...prev, [index]: !prev[index] }));

  return (
    <>
      <Breadcrumb />
      <h1 className="text-start font-bold text-2xl ml-10 -mt-10">Dashboard</h1>

      <div className="flex gap-6 ml-8 mt-5 mb-40">
        <div className="flex flex-col gap-6">
          <div className="bg-white w-80 h-56 rounded-2xl flex flex-col justify-between px-4 py-4">
            <div className="flex flex-col items-center">
              <p className="text-black text-2xl font-bold my-2 self-start">Crea nuovo</p>
              <button className="bg-cyan-500 text-white font-semibold w-full px-8 py-4 rounded-xl mt-2">Nuovo ordine</button>
              <button className="bg-gray-300 text-black font-semibold w-full px-8 py-4 rounded-xl mt-5">Nuovo preventivo</button>
            </div>
          </div>
          {/* Altri widget... (puoi copiare il resto della colonna sinistra dal tuo codice originale) */}
        </div>

        {/* Colonna destra: tabelle */}
        <div className="grid grid-cols-2 gap-6">
          {tables.map((table, index) => (
            <div key={index} className="bg-white w-[40rem] rounded-2xl shadow p-4 relative">
              <div className="flex items-center justify-between mb-3 cursor-pointer" onClick={() => toggleTable(index)}>
                <div className="flex items-center">
                  <h2 className="text-2xl font-bold">{table.title}</h2>
                  <span className="border-2 border-ciano text-ciano w-8 h-8 flex items-center justify-center rounded-full ml-3">{table.data.length}</span>
                </div>
                {openTables[index] ? <ChevronUp size={30} className="ml-3 border border-gray-300 rounded-md" /> : <ChevronDown size={30} className="ml-3 border border-gray-300 rounded-md" />}
              </div>

              {openTables[index] && (
                <div className="relative">
                  <div className={`overflow-hidden relative transition-[max-height] duration-500 ${expandedTables[index] ? "max-h-full" : "max-h-60"}`}>
                    {!expandedTables[index] && <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none z-20"></div>}
                    <div className="overflow-y-auto max-h-60">
                      <table className="w-full text-left border-collapse">
                        <thead className="sticky top-0 z-30 bg-white border-b-2 border-gray-300">
                          <tr>
                            <th className="p-2 text-sm text-gray-500">#DOCUMENTO</th>
                            <th className="p-2 text-sm text-gray-500">VS. RIFERIMENTO</th>
                            <th className="p-2 text-sm text-gray-500">DATA</th>
                            <th className="p-2 text-sm text-gray-500">STATO</th>
                          </tr>
                        </thead>
                        <tbody>
                          {table.data.map((row, idx) => (
                            <tr key={idx}>
                              <td className="p-2 text-sm">{row.documento}</td>
                              <td className="p-2 text-sm">{row.riferimento}</td>
                              <td className="p-2 text-sm">{row.data}</td>
                              <td className="p-2 text-sm">
                                <button className="bg-gray-300 text-black w-36 h-8 rounded-md text-sm">{table.buttonText}</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="flex justify-center mt-2">
                    {!expandedTables[index] && (
                      <p className="text-black text-md cursor-pointer underline underline-offset-4 decoration-2 decoration-ciano-2" onClick={() => toggleExpandTable(index)}>
                        Visualizza tutto
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
