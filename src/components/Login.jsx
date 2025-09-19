import { Link } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";


export function Login() {
    return (
        <>
        <Header></Header>
        <div className="flex items-center justify-center min-h-screen">
            <form className="max-w-sm w-full mx-auto p-6 rounded-xl bg-white/90 shadow-lg">
                
                <h2 className="text-2xl font-bold mb-6 text-black text-center">Accedi al tuo account</h2>

                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">
                        Email
                    </label>
                    <input type="email" id="email" placeholder="mario@email.com" className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-ciano-2 focus:outline-none"/>
                </div>

                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">
                        Password
                    </label>
                    <input type="password" id="password" placeholder="" className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-ciano-2 focus:outline-none"/>
                </div>

                <div className="flex justify-between items-center mb-5">
                    <div className="flex items-center">
                        <input id="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50"/>
                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-black">
                            Rimani connesso
                        </label>
                    </div>

                    <Link to="/password-dimenticata" className="text-orange-600 font-bold text-sm hover:underline">
                        Password dimenticata?
                    </Link>
                </div>

                <button type="submit" className="w-full text-white bg-blu hover:bg-ciano-2 ease-in-out duration-500 hover:text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Accedi
                </button>

                <div className="flex justify-start items-center mt-5">
                    <span className="text-sm font-medium text-black mr-1">Non sei ancora registrato?</span>
                    
                    <Link to="/register" className="text-orange-600 font-bold text-sm hover:underline">
                        Crea un account
                    </Link>
                </div>
            </form>
        </div>
        <Footer></Footer>
        </>
        
    );
}
