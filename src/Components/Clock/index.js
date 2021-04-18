import React, { useState } from 'react'

import styles from './style.module.css'

function zeroPadding(num, digit) {
  var zero = ''
  for (var i = 0; i < digit; i++) {
    zero += '0'
  }
  return (zero + num).slice(-digit)
}

function checkTime(i) {
  if (i < 10) {
    i = '0' + i
  } // add zero in front of numbers < 10
  return i
}



const Index = (props) => {
  var date = new Date()
  var dd = String(date.getDate()).padStart(2, '0')
  var mm = String(date.getMonth() + 1).padStart(2, '0') //January is 0!
  var yyyy = date.getFullYear()
  date = dd + '-' + mm + '-' + yyyy
  const [time,setTime] = useState('')
  setInterval(() => {
    var today = new Date()
    var h = today.getHours()
    var m = today.getMinutes()
    var s = today.getSeconds()
    m = checkTime(m)
    s = checkTime(s)
    var t = zeroPadding(h) + ':' + zeroPadding(m) + ':' + zeroPadding(s)
    setTime(t)
  }, 1000)
  
  return (
    <div className={styles.container}  style={{ top: props.top, left: props.left,right:props.right,bottom:props.bottom }}>
      <div className={styles.clock}>
        <p className={styles.date}>{date}</p>
        <p className={styles.time}>{time}</p>
      </div>
    </div>
  )
}

export default Index
