import React, { useEffect } from 'react'
import { getLocalStorage } from '../Utils/localStorage'

const AuthContext = ({children}) => {
    useEffect(() => {
      getLocalStorage()
    },)
    
  return (
    <div>{children}</div>
  )
}

export default AuthContext