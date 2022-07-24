import { useState } from 'react'
import './App.css'
import quotes from './json/quotes.json'
import colors from './utils/colors'
import QuoteBox from './components/QuoteBox'

function App() {
  const getRandomElement = array => {
    const indexRandom = Math.floor(Math.random() * array.length)
    return array[indexRandom]
  }

  let quoteRandom = getRandomElement(quotes)
  let colorRandom = getRandomElement(colors)

  const [randomQuoter, setrandomQuoter] = useState(quoteRandom)
  const [randomColors, setRandomColors] = useState(colorRandom)

  const objStyle = {
    backgroundColor: randomColors
  }

  const getRandomAll = () => {
    quoteRandom = getRandomElement(quotes)
    colorRandom = getRandomElement(colors)

    setrandomQuoter(quoteRandom)
    setRandomColors(colorRandom)
  }

  return (
    <div id='app' className="App" style={objStyle}>
      <QuoteBox
        randomQuoter={randomQuoter} 
        randomColors={randomColors}
        getRandomAll={getRandomAll} /* Para el click  */
      />
    </div>
  )
}

export default App