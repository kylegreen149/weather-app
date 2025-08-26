const Search = ({location, handleChange, handleSubmit}) => {
    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input 
                type="text"
                value={location}
                onChange={handleChange}
                placeholder="Search for a city here..."
            />
            <button>Search</button>
        </form>
    )
} 

export default Search