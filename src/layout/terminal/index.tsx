import React from 'react'
import {Input} from '../../components/input'
import {useHistory} from '../../components/history/hook'
import {History} from '../../components/history/History'
import {banner} from '../../utils/bin'
import styles from './styles.module.scss'

interface IndexPageProps {
  inputRef: React.MutableRefObject<HTMLInputElement>
}

const Terminal: React.FC<IndexPageProps> = ({inputRef}) => {
  const containerRef = React.useRef(null)
  const {
    history,
    command,
    lastCommandIndex,
    setCommand,
    setHistory,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([])

  const init = React.useCallback(() => setHistory(banner()), [])

  React.useEffect(() => {
    init()
  }, [init])

  // React.useEffect(() => {
  //   if (inputRef.current) {
  //     inputRef.current.scrollIntoView()
  //     inputRef.current.focus({preventScroll: true})
  //   }
  // }, [history, inputRef])

  return (
    <div className={styles.container}>
      <div className={styles.terminal__wrap}>
        <div ref={containerRef} className={styles.content}>
          <History history={history} />

          <Input
            inputRef={inputRef}
            containerRef={containerRef}
            command={command}
            history={history}
            lastCommandIndex={lastCommandIndex}
            setCommand={setCommand}
            setHistory={setHistory}
            setLastCommandIndex={setLastCommandIndex}
            clearHistory={clearHistory}
          />
        </div>
      </div>
    </div>
  )
}

export default Terminal
