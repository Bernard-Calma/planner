import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTransaction from './containers/AddTransaction';
import Header from './containers/Header';
import LandingPage from './containers/LandingPage';
import NavBar from './containers/NavBar';
import Planner from './containers/Planner';
import Transactions from './containers/Transactions';

const App = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [user, setUser] = useState({
    user: {ObjectID: "Guest"},
    username: "Guest"
  })
  

  const openNav = () => {
    setNavOpen(!navOpen)
  }
  return(
    <div style = {styles.container} className = "appContainer">
      {
        navOpen &&
        <NavBar openNav = {openNav}/>
      }
      
      <div style = {styles.mainContainer} onTouchStart = {() => setNavOpen(false)} onMouseDown = {() => setNavOpen(false)}>
        <Header openNav = {openNav}/>
        <Routes>
          <Route path="/" element = {<LandingPage />} />
          <Route path="planner" element = {<Planner />} /> 
          <Route path="transactions" element = {<Transactions user = {user}/>} />
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
      overflow: "hidden"
      
  },
  mainContainer: {
    width: "100%",
    height: "100%",
    // border: "1px solid black",
    backgroundColor: "rgb(245, 242, 242)",
  },
  textTest: {
      fontSize: "10vw"
  }
}