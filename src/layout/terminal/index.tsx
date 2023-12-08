import React from 'react'
import {BsArrowReturnRight} from 'react-icons/bs'
import styles from './styles.module.scss'

const Cards = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={styles.card__wrap}>
        <div className={styles.card}>
          <div className={styles.content}>
            <p>
              These API endpoints are valuable for developers that want to query
              information on addresses, balances, miner-participation,
              inscriptions, and more. These API endpoints are valuable for
              developers that want to query information on addresses, balances,
              miner-participation, inscriptions, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
