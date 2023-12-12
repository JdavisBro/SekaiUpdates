import { useState } from 'react'
import classes from './App.module.css'

function App() {
  const [server, setServer] = useState("en")

  return (
    <>
      <div className={ classes.header }>
        <p className={ classes.item }>Hello</p>
      </div>
    </>
  )
}

export default App
