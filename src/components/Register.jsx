export function Register() {
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <form className="max-w-sm w-full mx-auto p-6 rounded-xl bg-white/70 shadow-lg">
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">
                        Email / Partita IVA / Codice cliente*
                    </label>
                    <input type="email" id="email" className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                </div>

                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">
                        Password*
                    </label>
                    <input type="password" id="password" className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                </div>

                <div className="mb-5">
                    <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-black">
                        Ripeti password*
                    </label>
                    <input type="password" id="repeat-password" className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                </div>

              
                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        <input id="terms" type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300"
                        />
                    </div>

                    <label htmlFor="terms" className="ms-2 text-sm font-medium text-black">
                        Accetto {" "}
                        <a href="#" className="text-orange-600 hover:underline">
                            termini e condizioni
                        </a>
                    </label>
                </div>

                <button type="submit" className="w-full text-white bg-blu hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  text-sm px-5 py-2.5 text-center">
                    Registrati
                </button>
            </form>
        </div>
    );
}
