const SearchBox = ({handleSubmit, searchItem, userInput, submitButton}) => {
    

    return (
        <main>
            <form
            onSubmit={handleSubmit}
            >
                <div className="searchBar">
                    <input
                    className="colourInput" 
                    type="text" 
                    name="colourInput" 
                    id="colourInput" 
                    placeholder="Enter Colour"
                    value={searchItem}
                    onChange={userInput}
                    required
                    autoFocus
                    />
                </div>
                <button
                onClick={submitButton}
                >Submit                
                </button>
            </form>
        </main>
    )
}

export default SearchBox