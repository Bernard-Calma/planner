import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import OpenNav from './components/OpenNav';
import AddTransaction from './containers/AddTransaction';
import LandingPage from './containers/LandingPage';
import NavBar from './containers/NavBar';
import Planner from './containers/Planner';
import Transactions from './containers/Transactions';

const App = () => {
  const [navOpen, setNavOpen] = useState(true)

  const openNav = () => {
    setNavOpen(!navOpen)
  }
  return(
    <div style = {styles.container}>
      <NavBar 
        navOpen = {navOpen}
      />
      <div style = {styles.mainContainer}>
        <OpenNav 
          openNav = {openNav}
        />
        <Routes>
          <Route path="/" element = {<LandingPage />} />
          <Route path="planner" element = {<Planner />} /> 
          <Route path="transactions" element = {<Transactions />} />
          <Route path="transactions/add" element = {<AddTransaction />} />
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
      width: "99.82%",
      // border: "1px solid black",
  },
  mainContainer: {
    width: "100%",
    height: "100%",
    border: "1px solid black",
    backgroundColor: "rgb(245, 242, 242)"
  },
  textTest: {
      fontSize: "10vw"
  }
}