import { useState } from "react";
import { Breadcrumb } from "../components/Breadcrumb";
import { ChevronDown, ChevronUp, Check } from "lucide-react";
import { FooterDashboard } from "../components/FooterDashboard";

const tabs = [
  { id: "preventivi", label: "Preventivi" },
  { id: "preventivi-annullati", label: "Preventivi annullati" },
];

const initialOrders = [
  { numero: 1001, riferimento: "Mario Rossi", qta: 3, dataCreazione: "2025-09-26", dataPartenza: "2025-09-27", imponibile: 155.97 },
  { numero: 1002, riferimento: "Luigi Bianchi", qta: 1, dataCreazione: "2025-09-24", dataPartenza: "2025-09-25", imponibile: 69.99 },
  { numero: 1003, riferimento: "Carla Verdi", qta: 5, dataCreazione: "2025-09-21", dataPartenza: "2025-09-22", imponibile: 329.5 },
  { numero: 1004, riferimento: "Anna Neri", qta: 2, dataCreazione: "2025-09-19", dataPartenza: "2025-09-20", imponibile: 99.98 },
  { numero: 1005, riferimento: "Marco Gialli", qta: 1, dataCreazione: "2025-09-15", dataPartenza: "2025-09-16", imponibile: 45.0 },
];

export function PreventiviPage() {
  const [activeTab, setActiveTab] = useState("ordini-attivi");
  const [orders] = useState(initialOrders);

  const currentYear = new Date().getFullYear();
  const options = ["Oggi", "Ultima settimana", "Ultimi 30 giorni", "Ultimi 3 mesi"];
  const years = Array.from({ length: 10 }, (_, i) => currentYear - i);
  const months = [
    "Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno",
    "Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre",
  ];

  const [selectedOption, setSelectedOption] = useState("Ultima settimana"); 
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState("Gennaio");

  const [sortConfig, setSortConfig] = useState({ key: "dataCreazione", direction: "desc" });

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") direction = "desc";
    setSortConfig({ key, direction });
  };

  const formatCurrency = (amount) => new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(amount);

  const getFilterDateRange = (option) => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const startDate = new Date(now);
    switch (option) {
      case "Oggi": break;
      case "Ultima settimana": startDate.setDate(now.getDate() - 7); break;
      case "Ultimi 30 giorni": startDate.setDate(now.getDate() - 30); break;
      case "Ultimi 3 mesi": startDate.setMonth(now.getMonth() - 3); break;
      default: return null;
    }
    return startDate;
  };

  const filteredOrders = orders.filter(order => {
    const dateKey = sortConfig.key.includes("data") ? sortConfig.key : "dataCreazione";
    const orderDateValue = order[dateKey];
    const orderDate = orderDateValue ? new Date(orderDateValue) : null;

    if (selectedOption) {
      const filterDate = getFilterDateRange(selectedOption);
      if (filterDate && !orderDateValue) return false;
      if (filterDate && orderDate && orderDate < filterDate) return false;
    } else if (!selectedOption && selectedYear && selectedMonth) {
      if (!orderDateValue) return false;
      const monthIndex = months.indexOf(selectedMonth);
      if (orderDate.getFullYear() !== selectedYear || orderDate.getMonth() !== monthIndex) return false;
    }
    return true;
  });

  const sortedOrders = [...filteredOrders].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const aValue = a[sortConfig.key] || "";
    const bValue = b[sortConfig.key] || "";
    const isADate = aValue !== "";
    const isBDate = bValue !== "";
    if (!isADate && !isBDate) return 0;
    if (!isADate) return sortConfig.direction === "asc" ? 1 : -1;
    if (!isBDate) return sortConfig.direction === "asc" ? -1 : 1;
    const dateA = new Date(aValue);
    const dateB = new Date(bValue);
    return sortConfig.direction === "asc" ? dateA - dateB : dateB - dateA;
  });

  const DropdownFilter = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [yearOpen, setYearOpen] = useState(false);
    const [monthOpen, setMonthOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(prev => !prev);
      if (!dropdownOpen) { setYearOpen(false); setMonthOpen(false); }
    };

    const handleOptionSelect = (option) => {
      setSelectedOption(option);
      setDropdownOpen(false);
      setSelectedYear(currentYear);
      setSelectedMonth("Gennaio");
    };

    const handleYearSelect = (year) => {
      setSelectedYear(year);
      setYearOpen(false);
      setSelectedOption("");
    };

    const handleMonthSelect = (month) => {
      setSelectedMonth(month);
      setMonthOpen(false);
      setSelectedOption("");
    };

    return (
      <div className="flex flex-col w-64 relative z-50">
        <div
          className="bg-gray-50 border border-gray-300 rounded-2xl h-10 px-4 flex items-center justify-between cursor-pointer"
          onClick={toggleDropdown} 
        >
          <span>
            {selectedOption 
              ? selectedOption 
              : selectedYear && selectedMonth 
                ? `${selectedMonth} ${selectedYear}`
                : "Seleziona un'opzione"}
          </span>
          <span>{dropdownOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</span>
        </div>

        {dropdownOpen && (
          <ul className="absolute w-full bg-white mt-14 rounded-2xl shadow-lg z-[60] flex flex-col p-3">
            {options.map((option, index) => (
              <li
                key={index}
                className="px-4 py-2 rounded-xl cursor-pointer hover:bg-gray-100 flex justify-between items-center"
                onClick={() => handleOptionSelect(option)} 
              >
                {option}
                {selectedOption === option && <Check size={16} className="text-cyan-500" />}
              </li>
            ))}

            <div className="border-t mt-4 pt-3 flex gap-2">
              <div className="relative flex-1">
                <div
                  className="bg-gray-50 border-2 border-blue-600 rounded-lg px-2 py-1 flex items-center justify-between cursor-pointer"
                  onClick={(e) => { e.stopPropagation(); setYearOpen(prev => !prev); setMonthOpen(false); }}
                >
                  <span>{selectedYear}</span>
                  {yearOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
                {yearOpen && (
                  <ul className="absolute w-full bg-white mt-2 rounded-lg shadow-lg z-[70] max-h-40 overflow-auto">
                    {years.map(year => (
                      <li
                        key={year}
                        className="px-3 py-1 cursor-pointer hover:bg-gray-100 flex justify-between items-center"
                        onClick={(e) => { e.stopPropagation(); handleYearSelect(year); }}
                      >
                        {year}
                        {selectedYear === year && !selectedOption && <Check size={16} className="text-cyan-500" />}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="relative flex-1">
                <div
                  className="bg-gray-50 border-2 border-blue-600 rounded-lg px-2 py-1 flex items-center justify-between cursor-pointer"
                  onClick={(e) => { e.stopPropagation(); setMonthOpen(prev => !prev); setYearOpen(false); }}
                >
                  <span>{selectedMonth}</span>
                  {monthOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
                {monthOpen && (
                  <ul className="absolute w-full bg-white mt-2 rounded-lg shadow-lg z-[70] max-h-40 overflow-auto">
                    {months.map((month, idx) => (
                      <li
                        key={idx}
                        className="px-3 py-1 cursor-pointer hover:bg-gray-100 flex justify-between items-center focus:ring-1"
                        onClick={(e) => { e.stopPropagation(); handleMonthSelect(month); }}
                      >
                        {month}
                        {selectedMonth === month && !selectedOption && <Check size={16} className="text-cyan-500" />}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </ul>
        )}
      </div>
    );
  };

  return (
    <>
      <Breadcrumb />
      <h1 className="text-start font-bold text-2xl ml-8">Preventivi</h1>

      <div className="flex gap-8 whitespace-nowrap ml-8 mt-4 w-[350px] border-b-2 border-gray-200">
        {tabs.map(tab => (
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

      <div className="flex flex-col gap-6 mt-6 px-8 mb-6">
        <div className="flex items-center gap-6">
          <div className="bg-white w-80 min-h-[6rem] rounded-2xl flex flex-col justify-center items-center px-4 py-4">
            <p className="text-black text-2xl self-start font-bold my-2">Crea nuovo</p>
            <button className="bg-cyan-500 text-white font-semibold px-8 py-4 rounded-xl">Nuovo ordine</button>
          </div>

          <div className="flex items-start gap-2 relative z-50">
            <span className="text-black font-bold mt-2">Ordini:</span>
            <DropdownFilter />
          </div>
        </div>

        <div className="overflow-x-auto bg-white rounded-2xl ml-[335px] -mt-12 px-5">
          <table className="min-w-full divide-y divide-gray-400">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">#DOCUMENTO</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">VS.RIFERIMENTO</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">QTA</th>
                <th
                  className="px-6 py-3 text-left text-sm font-medium text-gray-700 cursor-pointer"
                  onClick={() => requestSort("dataCreazione")}
                >
                  <div className="flex items-center gap-1">
                    DATA CREAZIONE
                    {sortConfig.key === "dataCreazione" ? (
                      sortConfig.direction === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                    ) : <ChevronUp size={16} className="text-gray-700" />}
                  </div>
                </th>
                <th
                  className="px-6 py-3 text-left text-sm font-medium text-gray-700 cursor-pointer"
                  onClick={() => requestSort("dataPartenza")}
                >
                  <div className="flex items-center gap-1">
                    DATA PARTENZA
                    {sortConfig.key === "dataPartenza" ? (
                      sortConfig.direction === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                    ) : <ChevronUp size={16} className="text-gray-700" />}
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">IMPONIBILE</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">STATO</th>
              </tr>
            </thead>

            <tbody>
              {sortedOrders.map(order => (
                <tr key={order.numero} className="even:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">{order.numero}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{order.riferimento}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{order.qta}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{order.dataCreazione}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{order.dataPartenza || "N/D"}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{formatCurrency(order.imponibile)}</td>
                  <td className="px-6 py-4">
                    <button className="bg-gray-300 text-black w-32 h-9 text-sm rounded-xl">Tracking</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FooterDashboard></FooterDashboard>
    </>
  );
}
