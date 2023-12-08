'use client'
import React, {useState} from 'react'
import styles from './styles.module.scss'
import Hello from '/public/images/dashboard-image.jpg'

interface SelectionListProps {
  label?: string
  className?: any
}

export const listItems: SelectionListProps[] = [
  {
    label: 'Terminal',
  },
  {
    label: 'Cards',
  },
]

export const selectionContent = [
  {
    src: Hello,
    width: 300,
    height: 300,
    alt: 'hello',
    title: 'Learn what a Data Platform is all about',
    text: `Prisma's vision is to democratise the custom data access layer used by companies like Facebook, Twitter, and Airbnb and make it available to development teams and organisations of all sizes. Our VP of Product Hervé Labas speaks more about it during the enterprise-focused event held in March 2021`,
  },
  {
    src: Hello,
    width: 300,
    height: 300,
    alt: 'hello',
    title: 'hello',
    text: 'hello',
  },
]

const SelectionList: React.FC<SelectionListProps> = ({label, className}) => {
  const [isActive, setActive] = useState(0)
  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.selection__button__wrap} ${className}`}>
          <div className={styles.view__mode}>
            <h4>View Mode:</h4>
          </div>
          {listItems.map((item, index) => (
            <button
              type="button"
              key={index}
              onClick={() => setActive(index)}
              className={
                isActive === index
                  ? styles.active__button
                  : styles.button__not__active
              }
            >
              <span className={styles.x__bars}>
                [
                <span className={isActive !== index ? styles.x__hidden : ''}>
                  X
                </span>
                ]
              </span>{' '}
              {item.label}
            </button>
          ))}
        </div>
      </div>
      {selectionContent.map((item, index) => (
        <div></div>
      ))}
    </>
  )
}

export default SelectionList
