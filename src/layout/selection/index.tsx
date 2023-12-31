'use client'
import React, {useState} from 'react'
import styles from './styles.module.scss'
import Hello from '/public/images/dashboard-image.jpg'
import Cards from 'layout/cards'
import Terminal from 'layout/terminal'

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

const SelectionList: React.FC<SelectionListProps> = ({label, className}) => {
  const inputRef = React.useRef<HTMLInputElement>(null)

  const onClickAnywhere = () => {
    inputRef.current.focus()
  }

  const [isActive, setActive] = useState(0)
  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.selection__button__wrap} ${className}`}>
          <div className={styles.view__mode}>
            <h4>View Mode:</h4>
          </div>
          <div className={styles.btn__container}>
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
      </div>
      <div className={styles.selection__cards}>
        {isActive == 0 ? (
          <div onClick={onClickAnywhere} className={styles.wrapper}>
            <Terminal inputRef={inputRef} />
          </div>
        ) : (
          <div className={styles.wrapper}>
            <Cards />
          </div>
        )}
      </div>
    </>
  )
}

export default SelectionList
