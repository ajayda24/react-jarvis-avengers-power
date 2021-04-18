import React from 'react'

import Tilt from 'react-vanilla-tilt'

import styles from './style.module.css'

import Progress from './Progress'

const index = (props) => {
  var img = (
    <img
      src='https://freepngimg.com/thumb/avengers/24591-2-avengers.png'
      alt='avengers' width='80%'
    />
  )
  return (
    <div
      className={styles.gfg}
      style={{
        top: props.top,
        left: props.left,
        right: props.right,
        bottom: props.bottom,
        margin: props.margin,
        position: props.position,
      }}
    >
      <Tilt
        options={{ scale: 2, max: 25 }}
        style={{ backgroundColor: 'transparent' }}
      >
        <div className={styles.card}>
          <div className={styles.content}>
            <h2>{props.name}</h2>
            <center>
              {props.power
                ? Object.entries(props.power).map((single) => {
                    return <Progress key={single[0]} name={single[0]} value={`${single[1]}%`} />
                  })
                : img}
            </center>
          </div>
        </div>
      </Tilt>
    </div>
  )
}

export default index
