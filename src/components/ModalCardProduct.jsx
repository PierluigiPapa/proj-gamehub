import { X } from "lucide-react";
import { ShoppingCart } from 'lucide-react';


export function ModalCardProduct({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl p-4 animate-slideUp">
        <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r bg-blu">
            <h3 className="text-xl font-bold text-white">{product.nome}</h3>
            <button
              onClick={onClose}
              className="text-white hover:text-red-400 transition rounded-lg w-8 h-8 flex items-center justify-center"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <img
              className="w-full h-64 object-cover hover:scale-110 transition"
              src={product.img}
              alt={product.nome}
            />

            <div className="space-y-3">
              <p className="text-gray-300">
                <span className="font-semibold text-white">Marca:</span>{" "}
                {product.marca}
              </p>
              <p className="text-lg font-bold text-green-400">
                Prezzo: {product.prezzo}
              </p>

              {product.categoria === "Giochi" && product.consoleDisponibili && (
                <div>
                  <p className="font-semibold text-white mb-1">
                    Console disponibili:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.consoleDisponibili.map((consoleName, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-gray-700 text-ciano rounded-full"
                      >
                        {consoleName}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {product.caratteristiche && (
                <div>
                  <p className="font-semibold text-white mb-1">
                    Caratteristiche tecniche:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    {Object.entries(product.caratteristiche).map(
                      ([key, value]) => (
                        <li key={key}>
                          <span className="capitalize font-medium text-ciano">
                            {key}:
                          </span>{" "}
                          {value}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}

              <p className="text-gray-400 text-sm mt-4">
                {product.descrizione}
              </p>
            </div>
          </div>
          

          <div className="flex justify-between px-6 py-4 bg-gray-900">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-black bg-giallo-1 hover:bg-giallo-2 transition duration-500  px-4 py-2 rounded-lg shadow-md"
            >
              <ShoppingCart className="w-4 h-4" /> Aggiungi al carrello
            </button>
            
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-white bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-lg shadow-md"
            >
              <X className="w-4 h-4" /> Chiudi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
