import { useRouter } from 'next/router'
import React from 'react'

const withAuth = (Component) => {
  return () => {
    const router = useRouter()
    let ignore = true
    React.useEffect(() => {
      if (ignore) validate()
      return () => {
        ignore = false
      }
    }, [])
    const validate = async () => {
      const token = await localStorage.getItem('_q')
      if (!token) {
        router.push('/login')
      }
    }
    return <Component />
  }
}

export default withAuth
