import './App.css'
import { BusinessSkills } from './components/business-skills/BusinessSkills.tsx'

function App() {
  return (
    <>
      <h1>Business + React = ♥</h1>
      <div className='card'>
        <h2>Business Skills</h2>
        <BusinessSkills />
      </div>
    </>
  )
}

export default App
