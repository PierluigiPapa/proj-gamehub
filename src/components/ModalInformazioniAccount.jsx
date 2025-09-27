import { X } from "lucide-react";
import { InformazioniAccount } from "./InformazioniAccount";

export function ModalInformazioniAccount({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl p-4 animate-slideUp">
        <div className="rounded-2xl bg-white overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 ">
            <h3 className="text-2xl font-bold text-black">Nuova destinazione</h3>
            <button
              onClick={onClose}
              className="text-black hover:text-red-500 transition rounded-lg w-8 h-8 flex items-center justify-center"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6 bg-white rounded-b-2xl">
            <InformazioniAccount showTitle={false}/>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
}
