import { useState } from "react"

const SearchBox = () => {
    const {searchItem, setsearchItem} = useState()
    const userInput = (event) => {
        setsearchItem(event.target.value)
    }

    return (
        <main>
            <form
            onSubmit={''}
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
                >Submit                
                </button>
            </form>
        </main>
    )
}

export default SearchBox