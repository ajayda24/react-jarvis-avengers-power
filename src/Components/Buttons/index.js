import React, { useState } from 'react'
import axios from 'axios'


import jarvisCircle from '../../images/jarvis-circle.png'
import {avengers,allAvengers} from './avengers'

import Button from './Button'

const Index = (props) => {
  const [isCard1, setIsCard1] = useState(false)
  const [currentId, setCurrentId] = useState(0)

  const [heros, setHeros] = useState(avengers)
  const [addHero, setAddHero] = useState(0)

  const buttonClickHandler = (id) => {
    var heroName = id
    if (id == 'Ant-Man') {
      heroName = 'Ant-Man II'
    }

    axios
      .get(
        `https://www.superheroapi.com/api.php/284077466532522/search/${heroName}`
      )
      .then((response) => {
        for (let i = 0; i < response.data.results.length; i++) {
          if (response.data.results[i].name == id) {
            if (currentId == id) {
              return
            }
            setCurrentId(id)

            if (isCard1) {
              props.card1StateHandler(response.data.results[i])
              setIsCard1(false)
            } else {
              props.card2StateHandler(response.data.results[i])
              setIsCard1(true)
            }

            var updatedHeros = [...heros]

            if (allAvengers.length > addHero) {
              var index = updatedHeros.findIndex((h) => h == id)
              updatedHeros[index] = allAvengers[addHero]
              setHeros(updatedHeros)
              setAddHero(addHero + 1)
            }

            break
          }
        }
      })
      .catch((error) => {
        console.log(error)
      })
    
    
    

  }
  return (
    <div style={{ width: '40rem', margin: 'auto', position: 'relative' }}>
      {heros.map((name) => {
        return (
          <Button key={name} onClick={() => buttonClickHandler(name)}>
            {name}
          </Button>
        )
      })}
      <img
        src={jarvisCircle}
        alt=''
        width='300rem'
        style={{
          position: 'relative',
          display: 'block',
          margin: 'auto',
          marginTop: '10rem',
        }}
      />
    </div>
  )
}

export default Index
