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
            <p className={styles.text}>
              Hi, I am Victor Alvar.
              <p>
                Welcome to my website! I'm a self-taught software developer
                passionate about building products that resonate with both
                businesses and people. Transforming ideas into innovative
                solutions. Since the beginning of my journey as a developer, I
                have been building intuitive and scalable applications, focusing
                on the user experience. My skills and experience go beyond
                fullstack development and data science.
              </p>
              <p>
                I also like to design logos and brands visual identities, I did
                all the design for my company Atalaso I had no knowledge or
                experience at first but I quickly learned, the skills needed for
                the job, I love this aspect of the business, and I am excited
                about the future projects that await me, the possibilities and
                the cool things I'm going to build next.
              </p>
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
