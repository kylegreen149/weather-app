const Search = ({location, handleChange}) => {
    return (
        <form className="search-form">
            <input 
                onChange={handleChange}
                value={location}
                placeholder="Search for a city here..."
            />
            <button>Search</button>
        </form>
    )
} 

export default Search