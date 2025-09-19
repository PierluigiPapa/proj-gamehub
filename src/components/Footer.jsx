import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faSquareFacebook, faSquareXTwitter, faSquareInstagram, faSquareYoutube, faTiktok, faDiscord } from "@fortawesome/free-brands-svg-icons";

export function Footer() {
    return (
        <footer className="bg-blu shadow-sm mt-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="self-center text-2xl text-white font-semibold whitespace-nowrap">GameHub</span>
                    
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium">
                        <li>
                            <a href="#" className="text-white hover:text-ciano transition duration-300 me-4 md:me-6">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-ciano transition duration-300 me-4 md:me-6">Chi siamo</a>
                        </li>
                        <li>
                            <Link to="/prodotti" className="text-white hover:text-ciano transition duration-300 me-4 md:me-6">Prodotti</Link>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-ciano transition duration-300">Contatti</a>
                        </li>
                    </ul>
                </div>
                
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

                <div className="flex justify-between items-center">
                    <span className="block text-sm sm:text-center text-white">© 2025 GameHub. Tutti i diritti riservati.</span>
                    <a href="#" className="block text-sm sm:text-center text-white hover:text-ciano transition duration-300">Torna su</a>

                    <div className="flex gap-4 text-white text-2xl">
                        <a href="#"><FontAwesomeIcon icon={faSquareFacebook} className="text-4xl hover:text-ciano transition duration-300" /></a>
                        <a href="#"><FontAwesomeIcon icon={faSquareXTwitter} className="text-4xl hover:text-ciano transition duration-300" /></a>
                        <a href="#"><FontAwesomeIcon icon={faSquareInstagram} className="text-4xl hover:text-ciano transition duration-300" /></a>
                        <a href="#"><FontAwesomeIcon icon={faSquareYoutube} className="text-4xl hover:text-ciano transition duration-300" /></a>
                        <a href="#"><FontAwesomeIcon icon={faTiktok} className="text-4xl hover:text-ciano transition duration-300" /></a>
                        <a href="#"><FontAwesomeIcon icon={faDiscord} className="text-4xl hover:text-ciano transition duration-300" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
