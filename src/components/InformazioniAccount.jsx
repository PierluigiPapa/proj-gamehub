export function InformazioniAccount({ showTitle = true }) {
  return (
    <div className="flex-[1.5]">
      <form className="p-6 rounded-xl bg-white/90 mb-6">
        {showTitle && (
          <h2 className="text-2xl font-bold mb-6 text-black text-start">
            Informazioni account
          </h2>
        )}

        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <label htmlFor="nome" className="block mb-2 text-sm font-medium text-black">
              Nome*
            </label>
            <input
              type="text"
              id="nome"
              placeholder="Pierluigi"
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5 focus:ring-1 focus:ring-black focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="cognome" className="block mb-2 text-sm font-medium text-black">
              Cognome*
            </label>
            <input
              type="text"
              id="cognome"
              placeholder="Papa"
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5 focus:ring-1 focus:ring-black focus:outline-none"
            />
          </div>
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">
            Email*
          </label>
          <input
            type="email"
            id="email"
            placeholder="pierluigi@email.com"
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5 focus:ring-1 focus:ring-black focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <label htmlFor="regione" className="block mb-2 text-sm font-medium text-black">
              Regione
            </label>
            <input
              type="text"
              id="regione"
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5 focus:ring-1 focus:ring-black focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="cap" className="block mb-2 text-sm font-medium text-black">
              CAP
            </label>
            <input
              type="text"
              id="cap"
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5 focus:ring-1 focus:ring-black focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <label htmlFor="provincia" className="block mb-2 text-sm font-medium text-black">
              Provincia
            </label>
            <input
              type="text"
              id="provincia"
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5 focus:ring-1 focus:ring-black focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="citta" className="block mb-2 text-sm font-medium text-black">
              Città
            </label>
            <input
              type="text"
              id="citta"
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5 focus:ring-1 focus:ring-black focus:outline-none"
            />
          </div>
        </div>

        <div className="mb-5">
          <label htmlFor="indirizzo" className="block mb-2 text-sm font-medium text-black">
            Indirizzo
          </label>
          <input
            type="text"
            id="indirizzo"
            placeholder="Via Grottaglie, 1"
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5 focus:ring-1 focus:ring-black focus:outline-none"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gray-300 text-black px-24 py-4 font-semibold rounded-lg"
          >
            Salva
          </button>
        </div>
      </form>
    </div>
  )
}
