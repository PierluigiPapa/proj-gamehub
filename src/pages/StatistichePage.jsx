import { useState } from "react";
import { Breadcrumb } from "../components/Breadcrumb";
import { SelectYearComponent } from "../components/SelectYearComponent";
import { PackageOpen, Euro, ChevronUp } from "lucide-react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function StatistichePage() {
  const statsProduct = [
    { prodotto: "PlayStation 5", pezzi2025: 75, pezzi2024: 60, quantita2025: 45000, quantita2024: 36000, percentuale: 25 },
    { prodotto: "Xbox Series X", pezzi2025: 50, pezzi2024: 55, quantita2025: 35000, quantita2024: 38500, percentuale: -9 },
    { prodotto: "Nintendo Switch OLED", pezzi2025: 40, pezzi2024: 30, quantita2025: 18000, quantita2024: 13500, percentuale: 33 },
    { prodotto: "EA FC26", pezzi2025: 200, pezzi2024: 180, quantita2025: 10000, quantita2024: 9000, percentuale: 11 },
    { prodotto: "Tastiera Meccanica Razer BlackWidow", pezzi2025: 300, pezzi2024: 250, quantita2025: 15000, quantita2024: 12500, percentuale: 20 },
  ];

  const articoliConsegnati = [
    { prodotto: "PlayStation 5", quantita2025: 142, quantita2024: 485 },
    { prodotto: "Xbox Series X", quantita2025: 32, quantita2024: 45 },
    { prodotto: "Nintendo Switch OLED", quantita2025: 241, quantita2024: 360 },
    { prodotto: "EA FC26", quantita2025: 100, quantita2024: 0 },
    { prodotto: "Tastiera Meccanica Razer BlackWidow", quantita2025: 203, quantita2024: 854 },
  ];

  const articoliOrdinati = [
    { prodotto: "PlayStation 5", quantita2025: 340, quantita2024: 410 },
    { prodotto: "Xbox Series X", quantita2025: 232, quantita2024: 361 },
    { prodotto: "Nintendo Switch OLED", quantita2025: 463, quantita2024: 411 },
    { prodotto: "EA FC26", quantita2025: 500, quantita2024: 0 },
    { prodotto: "Tastiera Meccanica Razer BlackWidow", quantita2025: 410, quantita2024: 920 },
  ];

  const monthStats = [
    { month: "Gennaio", quantita2025: 5000, quantita2024: 4500, percentuale: 11 },
    { month: "Febbraio", quantita2025: 4700, quantita2024: 4800, percentuale: -2 },
    { month: "Marzo", quantita2025: 5300, quantita2024: 5000, percentuale: 6 },
    { month: "Aprile", quantita2025: 4900, quantita2024: 5100, percentuale: -4 },
    { month: "Maggio", quantita2025: 5500, quantita2024: 5200, percentuale: 6 },
    { month: "Giugno", quantita2025: 5400, quantita2024: 5300, percentuale: 2 },
    { month: "Luglio", quantita2025: 5600, quantita2024: 5400, percentuale: 4 },
    { month: "Agosto", quantita2025: 5700, quantita2024: 5500, percentuale: 4 },
    { month: "Settembre", quantita2025: 5800, quantita2024: 5700, percentuale: 2 },
    { month: "Ottobre", quantita2025: 6000, quantita2024: 5800, percentuale: 3 },
    { month: "Novembre", quantita2025: 6100, quantita2024: 5900, percentuale: 3 },
    { month: "Dicembre", quantita2025: 6200, quantita2024: 6000, percentuale: 3 },
  ];

  const generateAcademicYears = (count = 5) => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = 0; i < count; i++) {
      const start = currentYear - i;
      const end = start + 1;
      years.push(`${start}/${end}`);
    }
    return years;
  };

  const yearOptions = generateAcademicYears(5);
  const [selectedYear, setSelectedYear] = useState(yearOptions[0]);
  const [showComparazioni, setShowComparazioni] = useState(true);
  const [showConsegnati, setShowConsegnati] = useState(true);
  const [showOrdinati, setShowOrdinati] = useState(true);

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(amount);

  const totalePezzi2025 = statsProduct.reduce((sum, a) => sum + a.pezzi2025, 0);
  const totalePezzi2024 = statsProduct.reduce((sum, a) => sum + a.pezzi2024, 0);
  const totaleQuantita2025 = articoliOrdinati.reduce((sum, a) => sum + Number(a.quantita2025 || 0), 0);
  const totaleQuantita2024 = articoliOrdinati.reduce((sum, a) => sum + Number(a.quantita2024 || 0), 0);
  const percentualeTotale = totaleQuantita2024 === 0
    ? 100
    : Math.round(((totaleQuantita2025 - totaleQuantita2024) / totaleQuantita2024) * 100);

  const totaleConsegnati2025 = articoliConsegnati.reduce((sum, a) => sum + Number(a.quantita2025 || 0), 0);
  const totaleConsegnati2024 = articoliConsegnati.reduce((sum, a) => sum + Number(a.quantita2024 || 0), 0);

  const totaleOrdinati2025 = articoliOrdinati.reduce((sum, a) => sum + Number(a.quantita2025 || 0), 0);
  const totaleOrdinati2024 = articoliOrdinati.reduce((sum, a) => sum + Number(a.quantita2024 || 0), 0);

  const totaleMese2025 = monthStats.reduce((sum, a) => sum + Number(a.quantita2025 || 0), 0);
  const totaleMese2024 = monthStats.reduce((sum, a) => sum + Number(a.quantita2024 || 0), 0);

  return (
    <>
      <Breadcrumb />
      <h1 className="text-start font-bold text-2xl ml-8">Statistiche</h1>

      <div className="flex flex-col gap-6 mt-6 px-8 mb-6">
        <div className="flex items-center gap-3">
          <span className="text-black font-bold">Anno accademico:</span>
          <SelectYearComponent
            options={yearOptions}
            selectedOption={selectedYear}
            onSelect={setSelectedYear}
          />
        </div>

        <div className="flex gap-6">
          <div className="flex flex-col gap-6">
            <div className="bg-white w-64 min-h-[6rem] rounded-2xl flex flex-col justify-between px-4 py-4">
              <div className="flex items-center gap-3">
                <PackageOpen size={40} className="bg-gray-200 text-black rounded-full p-2" />
                <div className="flex flex-col">
                  <span className="text-gray-400 text-sm">Ordini in corso</span>
                  <h3 className="text-black font-bold text-2xl">€2342.39</h3>
                </div>
              </div>
              <span className="text-right underline underline-offset-4 decoration-2 decoration-ciano-2 text-black text-sm w-full mt-2 cursor-pointer">
                Visualizza tutti
              </span>
            </div>

            <div className="bg-white w-64 min-h-[6rem] rounded-2xl flex flex-col justify-between px-4 py-4">
              <div className="flex items-center gap-3">
                <Euro size={40} className="bg-gray-200 text-black rounded-full p-2" />
                <div className="flex flex-col">
                  <span className="text-gray-400 text-sm">DTT da fatturare</span>
                  <h3 className="text-black font-bold text-2xl">€642.39</h3>
                </div>
              </div>
              <span className="text-right underline underline-offset-4 decoration-2 decoration-ciano-2 text-black text-sm w-full mt-2 cursor-pointer">
                Visualizza tutti
              </span>
            </div>
          </div>
          
          <div className="bg-white flex-1 rounded-2xl p-6 flex gap-4 h-[550px]">
            <div className="w-3/4 h-[600px] lg:h-[500px]">
                <Bar data={{
                    labels: monthStats.map(item => item.month),
                    datasets: [
                        { 
                        label: "2025", 
                        data: monthStats.map(item => item.quantita2025), 
                        backgroundColor: "#00b0fc",
                        borderRadius: 8,
                        barThickness: 10,
                        },

                        { 
                        label: "2024", 
                        data: monthStats.map(item => item.quantita2024), 
                        backgroundColor: "#00A3B8",
                        borderRadius: 8,
                        barThickness: 10,
                        },
                    ],
                }}
                options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                    callbacks: { 
                        label: context => Math.round(context.raw) 
                    },
                    },
                },
                scales: { 
                    y: { 
                    beginAtZero: true,
                    ticks: {
                        callback: value => Math.round(value)
                    },
                    },
                },
                }}
                />
            </div>

            <div className="w-1/2 overflow-x-auto overflow-y-hidden h-[600px] ">
              <table className="w-full lg:h-[500px]">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">MESE</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">2025</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">2024</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">%</th>
                  </tr>
                </thead>
                <tbody>
                  {monthStats.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-200"}>
                      <td className="px-4 py-2 text-sm text-black">{item.month}</td>
                      <td className="px-4 py-2 text-sm text-black">{item.quantita2025}</td>
                      <td className="px-4 py-2 text-sm text-black">{item.quantita2024}</td>
                      <td className={`px-4 py-2 text-sm ${item.percentuale >= 0 ? "text-green-600" : "text-red-600"}`}>
                        {item.percentuale}%
                      </td>
                    </tr>
                  ))}
                   <tr className="border-t border-gray-400">
                        <th className="px-4 py-2 text-left text-sm font-bold text-black">TOTALE</th>
                        <th className="px-4 py-2 text-left text-sm font-bold text-black">{totaleMese2025}</th>
                        <th className="px-4 py-2 text-left text-sm font-bold text-black">{totaleMese2024}</th>
                        <th className={`px-6 py-4 text-sm text-left font-bold ${percentualeTotale >= 0 ? "text-green-600" : "text-red-600"}`}>{percentualeTotale}%</th>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto bg-white rounded-2xl mt-6 px-5 relative ml-[280px]">
          <ChevronUp
            size={35}
            className={`absolute top-5 right-5 text-gray-400 cursor-pointer border border-gray-200 rounded-xl transition-transform duration-300 ${showComparazioni ? "rotate-0" : "rotate-180"}`}
            onClick={() => setShowComparazioni(!showComparazioni)}
          />
          <h1 className="text-2xl text-black font-bold my-5 mx-5">Comparazioni Ordini/Preventivi</h1>
          {showComparazioni && (
            <table className="min-w-full divide-y divide-gray-400">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">PRODOTTO</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">N# Pezzi 2025</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">N# Pezzi 2024</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">2025</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">2024</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">%</th>
                </tr>
              </thead>
              <tbody>
                {statsProduct.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-200"}>
                    <td className="px-6 py-4 text-sm text-black">{item.prodotto}</td>
                    <td className="px-6 py-4 text-sm text-black">{item.pezzi2025}</td>
                    <td className="px-6 py-4 text-sm text-black">{item.pezzi2024}</td>
                    <td className="px-6 py-4 text-sm text-black">{formatCurrency(item.quantita2025)}</td>
                    <td className="px-6 py-4 text-sm text-black">{formatCurrency(item.quantita2024)}</td>
                    <td className={`px-6 py-4 text-sm font-bold ${item.percentuale >= 0 ? "text-green-600" : "text-red-600"}`}>{item.percentuale}%</td>
                  </tr>
                ))}
                <tr className="border-t border-gray-400">
                  <th className="px-6 py-4 text-left text-sm font-bold text-black">TOTALE</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black">{totalePezzi2025}</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black">{totalePezzi2024}</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black">{formatCurrency(totaleQuantita2025)}</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-black">{formatCurrency(totaleQuantita2024)}</th>
                  <th className={`px-6 py-4 text-sm text-left font-bold ${percentualeTotale >= 0 ? "text-green-600" : "text-red-600"}`}>{percentualeTotale}%</th>
                </tr>
              </tbody>
            </table>
          )}
        </div>

        <div className="flex justify-center items-start gap-6 mt-6 ml-[280px]">
          <div className="bg-white flex-1 rounded-2xl overflow-x-auto px-5 relative">
            <ChevronUp
              size={35}
              className={`absolute top-5 right-5 text-gray-400 cursor-pointer border border-gray-200 rounded-xl transition-transform duration-300 ${showConsegnati ? "rotate-0" : "rotate-180"}`}
              onClick={() => setShowConsegnati(!showConsegnati)}
            />
            <h1 className="text-2xl text-black font-bold my-5 mx-5">Campioni consegnati al: <span className="text-black text-2xl font-normal">01/01/25</span></h1>
            {showConsegnati && (
              <table className="min-w-full divide-y divide-gray-400">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">ARTICOLO</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">2025</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">2024</th>
                  </tr>
                </thead>
                <tbody>
                  {articoliConsegnati.map((articolo, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-200"}>
                      <td className="px-4 py-2 text-sm text-black">{articolo.prodotto}</td>
                      <td className="px-4 py-2 text-sm text-black">{articolo.quantita2025}</td>
                      <td className="px-4 py-2 text-sm text-black">{articolo.quantita2024}</td>
                    </tr>
                  ))}
                  <tr className="border-t border-gray-400">
                    <th className="px-4 py-2 text-left text-sm font-bold text-black">TOTALE</th>
                    <th className="px-4 py-2 text-left text-sm font-bold text-black">{totaleConsegnati2025}</th>
                    <th className="px-4 py-2 text-left text-sm font-bold text-black">{totaleConsegnati2024}</th>
                  </tr>
                </tbody>
              </table>
            )}
          </div>

          <div className="bg-white flex-1 rounded-2xl overflow-x-auto px-5 relative">
            <ChevronUp
              size={35}
              className={`absolute top-5 right-5 text-gray-400 cursor-pointer border border-gray-200 rounded-xl transition-transform duration-300 ${showOrdinati ? "rotate-0" : "rotate-180"}`}
              onClick={() => setShowOrdinati(!showOrdinati)}
            />
            <h1 className="text-2xl text-black font-bold my-5 mx-5">Articoli ordinati al: <span className="text-black text-2xl font-normal">01/01/25</span></h1>
            {showOrdinati && (
              <table className="min-w-full divide-y divide-gray-400">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">ARTICOLO</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">2025</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">2024</th>
                  </tr>
                </thead>
                <tbody>
                  {articoliOrdinati.map((articolo, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-200"}>
                      <td className="px-4 py-2 text-sm text-black">{articolo.prodotto}</td>
                      <td className="px-4 py-2 text-sm text-black">{articolo.quantita2025}</td>
                      <td className="px-4 py-2 text-sm text-black">{articolo.quantita2024}</td>
                    </tr>
                  ))}
                  <tr className="border-t border-gray-400">
                    <th className="px-4 py-2 text-left text-sm font-bold text-black">TOTALE</th>
                    <th className="px-4 py-2 text-left text-sm font-bold text-black">{totaleOrdinati2025}</th>
                    <th className="px-4 py-2 text-left text-sm font-bold text-black">{totaleOrdinati2024}</th>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
