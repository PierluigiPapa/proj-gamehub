export function Register() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <form className="max-w-3xl w-full mx-auto p-6 rounded-xl bg-white/90 shadow-lg">
                
                <h2 className="text-2xl font-bold mb-6 text-black text-center">Registrati su GameHub</h2>

                <div className="grid grid-cols-2 gap-4 mb-5">
                    <div>
                        <label htmlFor="nome" className="block mb-2 text-sm font-medium text-black">
                            Nome
                        </label>
                        <input type="text" id="nome" placeholder="Pierluigi" className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5"/>
                    </div>

                    <div>
                        <label htmlFor="cognome" className="block mb-2 text-sm font-medium text-black">
                            Cognome
                        </label>
                        <input type="text" id="cognome" placeholder="Papa" className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5"/>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-5">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">
                            Email
                        </label>
                        <input type="email" id="email" placeholder="pierluigi@email.com" className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5"/>
                    </div>

                    <div>
                        <label htmlFor="nascita" className="block mb-2 text-sm font-medium text-black">
                            Data di nascita
                        </label>
                        <input type="date" id="nascita" className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5"/>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-5">
                     <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">
                            Password*
                        </label>
                        <input type="password" id="password" className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5"/>
                    </div>
                    

                    <div>
                        <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-black">
                            Ripeti password*
                        </label>
                        <input type="password" id="repeat-password" className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5"/>
                    </div>
                </div>

                <div className="flex items-start justify-center mb-5">
                    <div className="flex items-center h-5">
                        <input id="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50"/>
                    </div>
                    <label htmlFor="terms" className="ms-2 text-sm font-medium text-black">
                        Accetto {" "}
                        <a href="#" className="text-orange-600 hover:underline">
                            termini e condizioni
                        </a>
                    </label>
                </div>

                <button type="submit" className="w-full text-white bg-blu hover:bg-ciano-2 ease-in-out duration-500 hover:text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Registrati
                </button>
            </form>
        </div>
    );
}
