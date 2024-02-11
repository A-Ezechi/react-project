import InnerWording from "./InnerWording"
import SearchBox from "./SearchBox"

const Content = ({handleSubmit, searchItem, userInput, colourChoice, submitButton}) => {
    return(
        <main className="mainBody">
            <InnerWording 
            colourChoice={colourChoice}
            />
            <SearchBox 
            handleSubmit={handleSubmit}
            searchItem={searchItem}
            userInput={userInput}
            colourChoice={colourChoice}
            submitButton={submitButton}
            />
        </main>
    )
}

export default Content