export function Newsletter() {
    return (
        <>

        <section>
            <div className="flex justify-center items-center my-5">
                <h1 className="text-4xl font-bold text-center">Iscriviti alla newsletter</h1>               
            </div>

            <div className="flex justify-center items-center gap-3 mt-6">
                <input type="text" placeholder="Nome*"  className="bg-gray-50 rounded-lg px-4 py-2 w-40"/>

                <input type="text" placeholder="Cognome*"  className="bg-gray-50 rounded-lg px-4 py-2 w-40"/>
                <input type="email" placeholder="Email*"  className="bg-gray-50 rounded-lg px-4 py-2 w-40"/>
                
                <button className="text-white bg-blu hover:bg-ciano-2 ease-in-out duration-500 hover:text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Iscriviti
                </button> 
            </div>

            <div className="flex justify-center items-center gap-3 mt-6">
                <span className="text-sm font-semibold text-center">*I campi contrassegnati con l'asterisco sono obbligatori</span>
            </div>

            <div className="flex justify-center items-center h-5">
                <input id="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 mr-1"/>
                <p className="text-sm font-semibold text-center">Compilando questo modulo acconsento al trattamento dei dati personali. Consulta la pagina <span className="text-white font-bold underline">Privacy Policy</span>.
                </p>
            </div> 
        </section>
        
        </>
    )
}

 

