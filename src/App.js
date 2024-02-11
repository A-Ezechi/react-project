import './App.css';
import { useState } from "react"
import Content from './Content';
import Header from './Header';

function App() {

    const [searchItem, setsearchItem] = useState('')
    const [colourChoice, setcolourChoice] = useState({backgroundColor: 'none'})

  const userInput = (event) => {
    const inputColour = event.target.value
    setsearchItem(inputColour)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('User Input: ', searchItem)
  }

  const submitButton = (event) => {
    userInput(event);
    setcolourChoice({ backgroundColor: searchItem });
  }



  return (
    <div className="App">
      <Header />
      <Content 
      handleSubmit={handleSubmit}
      searchItem={searchItem}
      userInput={userInput}
      submitButton={submitButton}
      colourChoice={colourChoice}
      />
    </div>
  );
}

export default App;
