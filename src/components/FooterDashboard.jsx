import { MessageCircleQuestionMark } from 'lucide-react';

export function FooterDashboard() {
    return (
        <footer className="bg-white shadow-md fixed bottom-0 left-0 w-full z-50">
            <div className="max-w-screen-xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
                
                {/* Sinistra */}
                <span className="text-2xl font-semibold text-blu">GameHub</span>

                {/* Centro */}
                <span className="text-sm mt-2 md:mt-0 text-blu font-bold text-center">
                    © 2025 GameHub. Tutti i diritti riservati.
                </span>

                <div className="flex items-center gap-2 mt-2 md:mt-0 cursor-pointer">
                    <span className="text-sm font-medium text-black">Supporto</span>
                    <div className="bg-ciano rounded-full p-2 flex items-center justify-center">
                        <MessageCircleQuestionMark size={26} className="text-gray-300" />
                    </div>
                </div>

            </div>
        </footer>
    );
}
