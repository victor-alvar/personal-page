import React from 'react'
import styles from './styles.module.scss'
import MatrixBackground from 'layout/matrix'

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={`${styles.container}`}>
        <div className={styles.wrap}>
          <div className={styles.content__wrap}>
            <h1>Unraveling the complexities of technology</h1>
            <span className={styles.text}>
              <p>
                Just like an artist, I want to shape and create forms, but not
                with a sculpture or a painting, a modern renaissance artist
                building and creating art in the form of code.
              </p>
            </span>
          </div>
          <div className={styles.animation__wrap}>
            <MatrixBackground />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
