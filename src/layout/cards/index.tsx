import React from 'react'
import {BsArrowReturnRight} from 'react-icons/bs'
import styles from './styles.module.scss'

const Cards = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={styles.card__wrap}>
        <div className={styles.card}>
          <div className={styles.content}>
            <h3>About</h3>
            <p>
              These API endpoints are valuable for developers that want to query
              information on addresses, balances, miner-participation,
              inscriptions, and more. These API endpoints are valuable for
              developers that want to query information on addresses, balances,
              miner-participation, inscriptions, and more.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <h3>Links</h3>
            <ul>
              <li>
                <a
                  href="https://twitter.com/victorsalvar"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <BsArrowReturnRight className={styles.arrow__icon} />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/victoralvar"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <BsArrowReturnRight className={styles.arrow__icon} />
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/victor-alvar"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <BsArrowReturnRight className={styles.arrow__icon} />
                  Github
                </a>
              </li>
              <li>
                <a href="mailto:victor.alvar@tutanota.com">
                  <BsArrowReturnRight className={styles.arrow__icon} />
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
