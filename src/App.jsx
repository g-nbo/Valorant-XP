import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import getAgents from './services/vlrAPI'
import { cors } from 'cors'

function App() {
  const [count, setCount] = useState(0)
  const [agents, setAgents] = useState([])

  useEffect(() => {

    (async () => {
      const chars = await getAgents();

      // Sort the characters by alphabetical order
      chars.sort((a, b) => a.displayName.localeCompare(b.displayName))
      console.log(chars)
      
      setAgents(chars);

    })().catch(err => {
      console.error(err);
    })

    return() => {
      console.log("returned");
    }
  }, [])

  return (
    <>
    {/* Display each agent */}
      {agents.map((a, i) => {
        return <div key={i}>{a.displayName}</div> 
      })}
    </>
  )
}

export default App
