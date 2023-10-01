import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Route } from 'react-router'

function Layout(children) {
    const { findToken } = useAuth()

    findToken()
  return (
    <>
    {children}
    </>
  )
}

export default Layout
