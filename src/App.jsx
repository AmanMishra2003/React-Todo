import { useState } from 'react'
import { CssBaseline } from '@mui/material'
import Todos from './Todos'
import './App.css'

function App() {

  return (
    <main style={{display:'flex', justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      <CssBaseline/>
      <h1 style={{textAlign:'center', fontWeight:'200'}}>Todos</h1>
      <Todos/>
    </main>
  )
}

export default App
