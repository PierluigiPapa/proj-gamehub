import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-blu border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="self-center text-2xl text-white font-semibold whitespace-nowrap">
            GameHub
          </span>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
              <li>
                <a href="#" className="text-white hover:text-blue-700 block py-2">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="text-white hover:text-blue-700 block py-2">
                  L'azienda
                </a>
              </li>

              <li>
                <a href="#" className="text-white hover:text-blue-700 block py-2">
                  Prodotti e Servizi
                </a>
              </li>

              <li>
                <a href="#" className="text-white hover:text-blue-700 block py-2">
                  Contatti
                </a>
              </li>

 
              <li className="relative">
                <button onClick={() => setOpen(!open)} className="flex items-center text-white hover:text-blue-700 py-2">
                  Area riservata
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {open && (
                  <ul className="absolute right-0 mt-2 w-48 bg-white rounded-xl overflow-hidden">
                    <li>
                      <Link to="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-t-xl">
                        Login
                      </Link>
                    </li>
                    
                    <li>
                      <Link to="/register" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-b-xl">
                        Registrati
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
