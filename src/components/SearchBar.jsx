export function SearchBar({ search, setSearch, filter, setFilter, consoleFilter, setConsoleFilter }) {
  return (
    <div className="w-full flex justify-center mb-8">
      <div className="w-full max-w-4xl flex flex-col sm:flex-row items-center gap-4 px-4 py-4 rounded-xl">
        <input
          type="text"
          placeholder="Cerca un prodotto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2 rounded-xl bg-gray-300 border border-gray-300 focus:outline-none  focus:shadow-xl"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 rounded-xl  bg-gray-300 border-gray-300"
        >
          <option value="Tutti">Tutti</option>
          <option value="Console">Console</option>
          <option value="Giochi">Giochi</option>
          <option value="Accessori">Accessori</option>
          <option value="Periferiche">Periferiche</option>
        </select>

        {filter === "Giochi" && (
          <select
            value={consoleFilter}
            onChange={(e) => setConsoleFilter(e.target.value)}
            className="px-4 py-2 rounded-xl  bg-gray-300 border-gray-300"
          >
            <option value="Tutte">Tutte le console</option>
            <option value="PlayStation 5">PlayStation 5</option>
            <option value="Xbox Series X">Xbox Series X</option>
            <option value="Nintendo Switch OLED">Nintendo Switch OLED</option>
          </select>
        )}
      </div>
    </div>
  );
}
