import NintendoSwitch from "../assets/img/Nintendo_Switch_2.webp";

export function Jumbotron() {
    return (
        <>
        
        <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <div className="flex justify-center items-center">
                    <img src={NintendoSwitch} alt="" className="drop-shadow-xl animate-fadeIn"/>
                </div>
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl opacity-0 animate-fadeIn delay-300">
                    30% di sconto sulla <span className="text-switch animate-pulse-delayed">Nintendo Switch 2</span> su GameHub
                </h1>
                <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48 opacity-0 animate-fadeIn delay-600"> 
                    Approfitta dell’offerta esclusiva su GameHub: tecnologia, divertimento e
                    innovazione a un prezzo imbattibile. Non lasciarti sfuggire l’occasione!
                </p>
                
                <div className="flex flex-col space-y-4 gap-3 sm:flex-row sm:justify-center sm:space-y-0 opacity-0 animate-fadeIn delay-900">
                    <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blu hover:bg-ciano hover:text-black ease-in-out duration-500">
                        Scopri di più
                    </a>
                    
                    <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black bg-slate-300 rounded-lg hover:bg-slate-600 ease-in-out duration-500">
                        Acquista ora
                    </a>  
                </div>
            </div>
        </section>
        </>
    )
}