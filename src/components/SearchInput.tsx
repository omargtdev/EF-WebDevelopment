interface PropTypes {
    valueToSearch: string,
    setValueToSearch: any,
    filterProducts: any
}

const SearchInput = ({ valueToSearch, setValueToSearch, filterProducts }: PropTypes) => {

    const handleClickSearch = () => filterProducts();
    const handleChangeSearch = (event: any) => setValueToSearch(event.target.value);

    return (
        <form className="container mx-auto mb-5">   
            <label htmlFor="default-search" className="mb-2 text-md font-medium text-gray-900 sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" value={valueToSearch} className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 bg-white" placeholder="Buscar por nombre..." required onChange={handleChangeSearch}/>
                <button type="button" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleClickSearch}>Buscar</button>
            </div>
        </form>
    );
}

export default SearchInput;