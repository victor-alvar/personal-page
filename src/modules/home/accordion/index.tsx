import Container from 'layout/container'
import React from 'react'
import styles from './styles.module.scss'
import SelectionList from 'layout/selection'

function SectionTwo() {
  return (
    <Container>
      <div className={styles.content__wrap}>
        <h2 className={styles.title}>Run IT for a lot less with ease</h2>
        <SelectionList />
      </div>
    </Container>
  )
}

export default SectionTwo
