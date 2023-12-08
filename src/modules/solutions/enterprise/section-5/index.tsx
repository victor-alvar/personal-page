import React from 'react'
import SectionContainer from 'layout/container'
import styles from './styles.module.scss'
import SectionTitle from 'components/ui/titles'
import FeatureCard from 'components/ui/cards/featuresCard'

function SectionFive() {
  return (
    <SectionContainer>
      <div className={styles.content__wrap}>
        <SectionTitle>
          Reduce costs and accelerate Lakehouse Platform
        </SectionTitle>
        <FeatureCard />
      </div>
    </SectionContainer>
  )
}

export default SectionFive
