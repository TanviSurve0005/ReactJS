import React from 'react'
import UserContextProvider from './context/userContextProvider'
import Login from './components/login'
import Profile from './components/profile'
import './App.css'

function App() {
  return (
    <UserContextProvider>
      <h1>Mini Context</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
