'use client'
import React, {useEffect, useRef} from 'react'
import styles from './styles.module.scss'

interface MatrixBackgroundProps {
  timeout?: number
}

const MatrixBackground: React.FC<MatrixBackgroundProps> = ({timeout = 50}) => {
  const canvas = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    // Ensure that canvas.current is defined
    if (canvas.current) {
      const context = canvas.current.getContext('2d')

      if (context) {
        const width = window.innerWidth
        const height = window.innerHeight

        // Set canvas dimensions
        canvas.current.width = width
        canvas.current.height = height

        context.fillStyle = '#000'
        context.fillRect(0, 0, width, height)

        const columns = Math.floor(width / 20) + 1
        const yPositions = Array.from({length: columns}).fill(0)

        context.fillStyle = '#000'
        context.fillRect(0, 0, width, height)

        const matrixEffect = () => {
          context.fillStyle = 'rgba(0, 0, 0, 0.1)'
          context.fillRect(0, 0, width, height)

          context.fillStyle = '#ff4800'
          context.font = '15pt monospace'

          yPositions.forEach((y, index) => {
            const text = String.fromCharCode(Math.random() * 128)
            const x = index * 20

            // Assert the type of y to number
            const yPos: number = y as number

            context.fillText(text, x, yPos)

            if (yPos > 100 + Math.random() * 1000) {
              yPositions[index] = 0
            } else {
              yPositions[index] = yPos + 20
            }
          })
        }

        const interval = setInterval(matrixEffect, timeout)
        return () => {
          clearInterval(interval)
        }
      }
    }
  }, [canvas, timeout])

  return (
    <div className={styles.wrapper}>
      <canvas ref={canvas} />
    </div>
  )
}

export default MatrixBackground
