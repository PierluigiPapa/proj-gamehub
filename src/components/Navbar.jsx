import { 
  User, 
  House, 
  Clipboard, 
  FileText, 
  BarChart2, 
  File, 
  LifeBuoy, 
  Search, 
  Bell, 
  UserPen 
} from "lucide-react"

export function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-16">
        <div className="flex items-center space-x-3">
          <User className="w-12 h-12 bg-blue-500 rounded-full text-gray-300 p-2" />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold">Pierluigi Papa</span>
            <span className="text-xs text-gray-500">Amministratore</span>
          </div>
        </div>

        <div className="flex items-center space-x-8">
          <ul className="flex space-x-6 list-none m-0 p-0">
            <li>
              <a 
                href="#" 
                className="flex items-center space-x-2 text-md group font-medium text-gray-400"
              >
                <House className="w-4 h-4 group-hover:text-ciano-2 transition-colors" /> 
                <span className="group-hover:text-black transition-colors">Dashboard</span>
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="flex items-center space-x-2 text-md group font-medium text-gray-400"
              >
                <Clipboard className="w-4 h-4 group-hover:text-ciano-2 transition-colors" /> 
                <span className="group-hover:text-black transition-colors">Ordini</span>
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="flex items-center space-x-2 text-md group font-medium text-gray-400"
              >
                <FileText className="w-4 h-4 group-hover:text-ciano-2 transition-colors" /> 
                <span className="group-hover:text-black transition-colors">Preventivi</span>
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="flex items-center space-x-2 text-md group font-medium text-gray-400"
              >
                <BarChart2 className="w-4 h-4 group-hover:text-ciano-2 transition-colors" /> 
                <span className="group-hover:text-black transition-colors">Statistiche</span>
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="flex items-center space-x-2 text-md group font-medium text-gray-400"
              >
                <File className="w-4 h-4 group-hover:text-ciano-2 transition-colors" /> 
                <span className="group-hover:text-black transition-colors">Documenti</span>
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="flex items-center space-x-2 text-md group font-medium text-gray-400"
              >
                <LifeBuoy className="w-4 h-4 group-hover:text-ciano-2 transition-colors" /> 
                <span className="group-hover:text-black transition-colors">Supporto</span>
              </a>
            </li>
          </ul>

          <div className="flex items-center border-gray-300 border-2 rounded-full px-3 h-10 ml-20">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-black w-4 h-4"/>
              <input 
                type="text"  
                placeholder="Numero ordine"  
                className="bg-gray-100 rounded-full w-96 pl-8 px-3 py-1 text-sm focus:outline-none"
              />
            </div>

            <button className="relative p-1 ml-5 rounded-full bg-gray-100 mr-3">
              <Bell className="w-6 h-6 text-gray-600"/>
              <span className="absolute top-0.5 right-0 inline-flex w-2 h-2 bg-ciano-2 rounded-full"></span>
            </button>

            <button className="p-1 rounded-full bg-blue-500">
              <UserPen className="w-6 h-6 text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
