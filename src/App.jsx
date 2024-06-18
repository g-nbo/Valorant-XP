import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from './pages/LandingPage'
import SelectAgentsPage from './pages/SelectAgentsPage'
import AgentsPage from './pages/AgentsPage'
import AgentContext from './context/AgentContext'
import getAgents from './services/valAPI'






function App() {
  const [count, setCount] = useState(0)

  const [agents, setAgents] = useState([])

  useEffect(() => {

    (async () => {
      const chars = await getAgents();

      // Sort the characters by alphabetical order
      chars.sort((a, b) => a.displayName.localeCompare(b.displayName))
      // Insure there are no duplicate agents
      const filteredAgents = chars.filter((c, i) => i >= chars.length - 1 ? c : c.displayName !== chars[i + 1].displayName)

      setAgents(filteredAgents);

    })().catch(err => {
      console.error(err);
    })

    return () => {
      console.log("returned");
    }
  }, [])






  return (
    <AgentContext.Provider value={{
      "agents": agents
    }}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<LandingPage />} />
            <Route path='agents'>
              <Route index element={<SelectAgentsPage />} />
              <Route path=":id" element={<AgentsPage />} />
            </ Route>


          </Route>
        </Routes>
      </BrowserRouter >
    </ AgentContext.Provider>
  )
}

export default App
