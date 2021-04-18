import React from 'react'

import styles from './style.module.css'

const index = (props) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  return (
    <div className={styles.progress}>
      <h4>{capitalizeFirstLetter(props.name)} </h4>
      <div className={styles.meter}>
        <span style={{ width: props.value }}></span>
      </div>
    </div>
  )
}

export default index
