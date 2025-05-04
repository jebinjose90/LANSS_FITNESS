

const Search = () => {
    return (

        <div className="justify-center py-12 bg-color2 h-32 w-full">
            <form className="max-w-md mx-auto">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-color3 sr-only ">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-color3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-color3 border border-color3 bg-color2 focus:outline-none placeholder-color3" placeholder="Search Mockups, Logos..." required />
                    <button type="submit" className="text-color3 absolute end-2.5 bottom-2.5 bg-color2 focus:outline-none font-medium text-sm px-4 py-2">Search</button>
                </div>
            </form>
        </div>

    )
}

export default Search