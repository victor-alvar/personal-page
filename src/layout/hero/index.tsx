import React from 'react'
import styles from './styles.module.scss'

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={`${styles.container}`}>
        <div className={styles.wrap}>
          <div className={styles.content__wrap}>
            <h1>
              <span className={styles.first__title}>Build Products</span>
              <span className={styles.second__title}>People Love</span>
            </h1>
            <span className={styles.text}>
              <p>
                Building on Bitcoin is hard. Hiro's developer tools make it
                easier.
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
