import { useState } from "react";
import { ChevronDown, ChevronUp, Check } from "lucide-react";

export function DropdownFilter({
  options = [],
  years = [],
  months = [],
  selectedOption,
  setSelectedOption,
  selectedYear,
  setSelectedYear,
  selectedMonth,
  setSelectedMonth,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [yearOpen, setYearOpen] = useState(false);
  const [monthOpen, setMonthOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
    if (!dropdownOpen) {
      setYearOpen(false);
      setMonthOpen(false);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
    const currentYear = new Date().getFullYear();
    setSelectedYear(currentYear);
    setSelectedMonth("Gennaio");
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setYearOpen(false);
    setSelectedOption(""); // Deseleziona l'opzione tempo
  };

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
    setMonthOpen(false);
    setSelectedOption(""); // Deseleziona l'opzione tempo
  };

  return (
    <div className="flex flex-col w-64 relative z-50">
      {/* Dropdown principale */}
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
        {dropdownOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </div>

      {dropdownOpen && (
        <ul className="absolute w-full bg-white mt-2 rounded-2xl shadow-lg z-50 flex flex-col p-2">
          {/* Opzioni intervallo di tempo */}
          {options.map((option, idx) => (
            <li
              key={idx}
              className="px-4 py-2 rounded-xl cursor-pointer hover:bg-gray-100 flex justify-between items-center"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
              {selectedOption === option && <Check size={16} className="text-cyan-500" />}
            </li>
          ))}

          {/* Selezione anno/mese */}
          <div className="border-t mt-2 pt-2 flex gap-2">
            {/* Anno */}
            <div className="relative flex-1">
              <div
                className="bg-gray-50 border-2 border-blue-600 rounded-lg px-2 py-1 flex items-center justify-between cursor-pointer"
                onClick={(e) => { e.stopPropagation(); setYearOpen(prev => !prev); setMonthOpen(false); }}
              >
                <span>{selectedYear}</span>
                {yearOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
              {yearOpen && (
                <ul className="absolute w-full bg-white mt-2 rounded-lg shadow-lg z-50 max-h-40 overflow-auto">
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

            {/* Mese */}
            <div className="relative flex-1">
              <div
                className="bg-gray-50 border-2 border-blue-600 rounded-lg px-2 py-1 flex items-center justify-between cursor-pointer"
                onClick={(e) => { e.stopPropagation(); setMonthOpen(prev => !prev); setYearOpen(false); }}
              >
                <span>{selectedMonth}</span>
                {monthOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
              {monthOpen && (
                <ul className="absolute w-full bg-white mt-2 rounded-lg shadow-lg z-50 max-h-40 overflow-auto">
                  {months.map((month, idx) => (
                    <li
                      key={idx}
                      className="px-3 py-1 cursor-pointer hover:bg-gray-100 flex justify-between items-center"
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
}
