'use client'
import React from 'react'
import {useRouter} from 'next/navigation'

const NotFound = () => {
  const router = useRouter()

  React.useEffect(() => {
    router.replace('/')
  })

  return null
}

export default NotFound
