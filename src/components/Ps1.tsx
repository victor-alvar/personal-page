import React from 'react'
import config from '../../config.json'
import styles from './styles.module.scss'

export const Ps1 = () => {
  return (
    <div>
      <span className={`${styles.username}`}>{config.ps1_username}</span>
      <span className={`${styles.symbol}`}>@</span>
      <span className={`${styles.hostname}`}>{config.ps1_hostname}</span>
      <span className={`${styles.dollar}`}>:$ ~ </span>
    </div>
  )
}

export default Ps1
