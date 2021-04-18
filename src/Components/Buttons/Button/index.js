import React from 'react'

import styles from './style.module.css'

const index = (props) => {
  return (
    <>
      <button
        className={styles.btn}
        style={{
          top: props.top,
          left: props.left,
          right: props.right,
          bottom: props.bottom,
        }}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </>
  )
}

export default index
