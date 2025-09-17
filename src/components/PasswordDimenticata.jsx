export function PasswordDimenticata() {
    return (
        <>
        <div className="flex items-center justify-center min-h-screen">
            <form className="max-w-sm w-full mx-auto p-6 rounded-xl bg-white/90 shadow-lg">
                
                <h2 className="text-2xl font-bold mb-6 text-black text-center">Password dimenticata?</h2>

                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">
                        Email
                    </label>
                    <input type="email" id="email" placeholder="mario@email.com" className="shadow-xs bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5"/>
                </div>

                <button type="submit" className="w-full text-white bg-blu hover:bg-ciano-2 ease-in-out duration-500 hover:text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Continua
                </button>
            </form>
        </div>
        </>
    )
}