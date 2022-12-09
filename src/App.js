import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import OpenNav from './components/OpenNav';
import LandingPage from './containers/LandingPage';
import NavBar from './containers/NavBar';
import Planner from './containers/Planner';

const App = () => {
  const [navOpen, setNavOpen] = useState(true)
  return(
    <div style = {styles.container}>
      <NavBar 
        navOpen = {navOpen}
      />
      <div>
        <OpenNav 
          
        />
        <Routes>
          <Route path="/" element = {<LandingPage />} />
          <Route path="planner" element = {<Planner />} /> 
        </Routes>
      </div>
    </div>
  )
  
}

export default App;

const styles = {
  container: {
      display: "flex",
      flexDirection: "row",
      height: "99.8vh",
      width: "98.5hh",
      border: "1px solid black",
  },
  textTest: {
      fontSize: "10vw"
  }
}