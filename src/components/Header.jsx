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
                <Link to="/" className="text-white hover:text-ciano transition-colors duration-300 ease-in-out tr block py-2">
                  Home
                </Link>
              </li>

              <li>
                <a href="#" className="text-white hover:text-ciano transition-colors duration-300 ease-in-out block py-2">
                  L'azienda
                </a>
              </li>

              <li>
                <a href="#" className="text-white hover:text-ciano transition-colors duration-300 ease-in-out block py-2">
                  Prodotti e Servizi
                </a>
              </li>

              <li>
                <a href="#" className="text-white hover:text-ciano transition-colors duration-300 ease-in-out block py-2">
                  Contatti
                </a>
              </li>

 
              <li className="relative">
                <button onClick={() => setOpen(!open)} className="flex items-center text-white hover:text-ciano transition-colors duration-300 ease-in-out py-2">
                  Area riservata
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {open && (
                  <ul className="absolute bg-white -left-2 mt-2 w-44 rounded-xl overflow-hidden">
                    <li>
                      <Link to="/login" onClick={() => setOpen(false)} className="block px-4 py-2 text-black hover:bg-blue-300 rounded-t-xl">
                        Login
                      </Link>
                    </li>
                    
                    <li>
                      <Link to="/register" onClick={() => setOpen(false)} className="block px-4 py-2 text-black hover:bg-blue-300 rounded-b-xl">
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
