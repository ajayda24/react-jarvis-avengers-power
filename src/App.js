import { useState } from 'react'

import Buttons from './Components/Buttons'
import Card from './Components/Card'
import Clock from './Components/Clock'

function App() {
  const [sWidth, setSWidth] = useState(window.innerWidth)
  window.onresize = () => {
    setSWidth(window.innerWidth)
  }

  const [card1State, setCard1State] = useState({name:''})
  const [card2State, setCard2State] = useState({ name: ''})

  const card1StateHandler = (superHero) => {
    setCard1State(superHero)
  }
  const card2StateHandler = (superHero) => {
    setCard2State(superHero)
  }

  
  return (
    <div style={{ width: '100%', position: 'relative' }}>
      {sWidth > 1300 ? (
        <>
          <Clock right='16rem' bottom='25.5rem' />
          <Card left='60px' name={card1State.name} power={card1State.powerstats} />
          <Card right='60px' name={card2State.name} power={card2State.powerstats} />
          <Buttons
            card1StateHandler={card1StateHandler}
            card2StateHandler={card2StateHandler}
          />
        </>
      ) : (
        <center>
          <Card
            position='relative'
            margin={`${(window.innerHeight - 300) / 2}px 0`}
            name='This is not compatible for mobile devices'
          />
        </center>
      )}
    </div>
  )
}

export default App
