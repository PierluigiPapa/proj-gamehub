import { X } from "lucide-react";

export function ModalNuovoContatto({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl p-4 animate-slideUp">
        <div className="rounded-2xl bg-white overflow-hidden shadow-lg">
          <div className="flex items-center justify-between px-6 py-4">
            <h3 className="text-2xl font-bold text-black">Nuovo contatto</h3>
            <button
              onClick={onClose}
              className="text-black hover:text-red-500 transition rounded-lg w-8 h-8 flex items-center justify-center"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="px-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Referente*</label>
              <input
                type="text"
                placeholder=""
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-1 focus:ring-black focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Nominativo*</label>
              <input
                type="text"
                placeholder=""
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-1 focus:ring-black focus:outline-none"
              />
            </div>
          </div>

          <div className="px-6 pt-4 pb-6 flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">Telefono</label>
              <input
                type="text"
                placeholder=""
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-1 focus:ring-black focus:outline-none"
              />
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder=""
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-1 focus:ring-black focus:outline-none"
              />
            </div>
          </div>

          <div className="flex justify-center pb-6">
            <button
              type="submit"
              className="bg-gray-300 text-black px-24 py-4 font-semibold rounded-lg"
            >
              Salva
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
