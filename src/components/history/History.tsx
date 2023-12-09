import React from 'react'
import {History as HistoryInterface} from './interface'
import {Ps1} from '../Ps1'
import styles from './styles.module.scss'

export const History: React.FC<{history: Array<HistoryInterface>}> = ({
  history,
}) => {
  return (
    <>
      {history.map((entry: HistoryInterface, index: number) => (
        <div key={entry.command + index}>
          <div className={styles.wrapper}>
            <div className={styles.container}>
              <Ps1 />
            </div>

            <div className={styles.content}>{entry.command}</div>
          </div>

          <p
            className={styles.paragraph}
            dangerouslySetInnerHTML={{__html: entry.output}}
          />
        </div>
      ))}
    </>
  )
}

export default History
