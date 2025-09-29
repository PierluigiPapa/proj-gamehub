import { useState } from "react";
import { ChevronDown, ChevronUp, Check } from "lucide-react";

export function SelectYearComponent({ options = [], selectedOption, onSelect }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(prev => !prev);

  const handleOptionSelect = (option) => {
    onSelect(option);
    setDropdownOpen(false); 
  };

  return (
    <div className="flex flex-col w-64 relative z-50">
      <div
        className="bg-gray-50 border border-gray-300 rounded-2xl h-10 px-4 flex items-center justify-between cursor-pointer"
        onClick={toggleDropdown}
      >
        <span>{selectedOption || "Seleziona un'opzione"}</span>
        {dropdownOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </div>

      {dropdownOpen && (
        <ul className="absolute w-full bg-white mt-12 rounded-2xl shadow-lg z-50 flex flex-col p-2 max-h-60 overflow-auto">
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
        </ul>
      )}
    </div>
  );
}
