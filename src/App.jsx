import { Switch } from '@mui/material'
import './App.css'
import LoginButton from './components/LoginButton'
import { Route } from 'react-router-dom'
import Buda from './pages/Buda'
import Adao from './pages/Adao'

function App() {

  return (
    <>

        <Switch>
          <Route path="/" element={LoginButton} />
          <Route path="/buda" element={Buda} />
          <Route path="/adao" element={Adao} />
        </Switch>
     
    </>
  )
}

export default App
