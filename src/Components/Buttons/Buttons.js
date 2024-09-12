import React from 'react'
import styles from './Buttons.module.css'  

export default function Buttons({text, icon,islong}) {
  return (
    <button className={islong ? styles.long : styles.butt } >
{icon} {text}

    </button>
  )
}
