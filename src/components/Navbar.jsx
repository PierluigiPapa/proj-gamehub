import { 
  User, House, Clipboard, FileText, BarChart2, File, LifeBuoy, Search, 
  Bell, UserPen, LogOut, Settings 
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true);

  const profileRef = useRef(null);
  const notificationsRef = useRef(null);

  const handleLogout = () => {
    window.location.href = "/";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setIsNotificationsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleBellClick = () => {
    setHasNotifications(false);
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-16">
        <div className="flex items-center space-x-3">
          <User className="w-12 h-12 bg-blue-500 rounded-full text-gray-300 p-2" />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold whitespace-nowrap">Pierluigi Papa</span>
            <span className="text-xs text-gray-500">Amministratore</span>
          </div>
        </div>

        <div className="flex items-center space-x-8">
          <ul className="flex space-x-6 list-none m-0 p-0">
            <li>
              <Link 
                to="/dashboard" 
                className="flex items-center space-x-2 text-md group font-medium text-gray-400"
              >
                <House className="w-4 h-4 group-hover:text-ciano-2 transition-colors" />
                <span className="group-hover:text-black transition-colors">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/dashboard/ordini" 
                className="flex items-center space-x-2 text-md group font-medium text-gray-400"
              >
                <Clipboard className="w-4 h-4 group-hover:text-ciano-2 transition-colors" />
                <span className="group-hover:text-black transition-colors">Ordini</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/dashboard/preventivi" 
                className="flex items-center space-x-2 text-md group font-medium text-gray-400"
              >
                <FileText className="w-4 h-4 group-hover:text-ciano-2 transition-colors" />
                <span className="group-hover:text-black transition-colors">Preventivi</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/dashboard/statistiche" 
                className="flex items-center space-x-2 text-md group font-medium text-gray-400"
              >
                <BarChart2 className="w-4 h-4 group-hover:text-ciano-2 transition-colors" />
                <span className="group-hover:text-black transition-colors">Statistiche</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/dashboard/documenti" 
                className="flex items-center space-x-2 text-md group font-medium text-gray-400"
              >
                <File className="w-4 h-4 group-hover:text-ciano-2 transition-colors" />
                <span className="group-hover:text-black transition-colors">Documenti</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/dashboard/supporto" 
                className="flex items-center space-x-2 text-md group font-medium text-gray-400"
              >
                <LifeBuoy className="w-4 h-4 group-hover:text-ciano-2 transition-colors" />
                <span className="group-hover:text-black transition-colors">Supporto</span>
              </Link>
            </li>
          </ul>

          <div className="flex items-center border-gray-300 border-2 rounded-full px-3 h-10 ml-60 relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-black w-4 h-4" />
              <input 
                type="text"
                placeholder="Numero ordine"
                className="bg-gray-100 rounded-full w-96 pl-8 px-3 py-1 text-sm focus:outline-none"
              />
            </div>

            <div className="relative" ref={notificationsRef}>
              <button 
                onClick={handleBellClick} 
                className="relative p-1 ml-5 rounded-full bg-gray-100 mr-3"
              >
                <Bell className="w-6 h-6 text-gray-600" />
                {hasNotifications && (
                  <span className="absolute top-0.5 right-0 inline-flex w-2 h-2 bg-ciano-2 rounded-full"></span>
                )}
              </button>

              {isNotificationsOpen && (
                <div className="absolute right-0 mt-7 w-64 bg-white rounded-lg py-2 z-50">
                  <div className="flex flex-col">
                    <div className="flex flex-col px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                      <div className="flex items-center">
                        Hai creato un nuovo ordine
                        <span className="inline-block w-3 h-3 bg-ciano-2 rounded-full ml-2"></span>
                      </div>
                    <span className="text-xs text-gray-400 mt-1">10 minuti fa</span>
                  </div>
                </div>
              </div>
              )}
            </div>

            <div className="relative ml-3" ref={profileRef}>
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)} 
                className="p-1 rounded-full bg-blue-500 mt-1"
              >
                <UserPen className="w-6 h-6 text-gray-300" />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 z-50">
                  <Link 
                    to="" 
                    onClick={() => setIsProfileOpen(false)} 
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <Settings className="w-4 h-4 mr-2" /> Impostazioni
                  </Link>
                  <Link 
                    to="/dashboard/profilo" 
                    onClick={() => setIsProfileOpen(false)} 
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <User className="w-4 h-4 mr-2" /> Profilo
                  </Link>

                  <hr className="my-1" />

                  <button 
                    onClick={handleLogout} 
                    className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    <LogOut className="w-4 h-4 mr-2" /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
