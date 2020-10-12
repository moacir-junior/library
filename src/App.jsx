import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Root from './root'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Root />
      </BrowserRouter >
    </div>
  )
}