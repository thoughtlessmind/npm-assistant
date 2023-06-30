const Search = ()=>{
    return <div className="flex min-h-screen flex-col  p-24 bg-primary-3">
        <div id="multiple-package-search-container">
            <input placeholder="search your package" className="p-2 rounded-md w-60" />
        </div>
        <div id="meta-data-container" className="flex flex-row gap-3 mt-4">
            <div className="w-96 h-96 bg-primary-10">

            </div>
            <div className="w-96 h-96 bg-primary-10">

            </div>
        </div>
        <div id="info-data-container" className="flex mt-4">
            <h1>Git information will be shown here</h1>
        </div>
    </div>
}

export default Search;
