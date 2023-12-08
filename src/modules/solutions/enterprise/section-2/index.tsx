import SectionContainer from 'layout/container'
import React from 'react'
import styles from './styles.module.scss'
import SectionTitle from 'components/ui/titles'
import SelectionList from 'layout/selection'

function SectionTwo() {
  return (
    <SectionContainer>
      <div className={styles.content__wrap}>
        <SectionTitle>Run IT for a lot less with ease </SectionTitle>
        <SelectionList />
      </div>
    </SectionContainer>
  )
}

export default SectionTwo
