import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTransaction from './containers/AddTransaction';
import Bills from './containers/Bills';
import Header from './containers/Header';
import LandingPage from './containers/LandingPage';
import NavBar from './containers/NavBar';
import Planner from './containers/Planner';
import Transactions from './containers/Transactions';

const App = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [showEdit, setShow] = useState({id: "", show: false})
  const [user, setUser] = useState({
    user: {ObjectID: "Guest"},
    username: "Guest"
  })

  const openNav = () => {
    setNavOpen(!navOpen)
  }

  const handleShowEdit = (id) => {
    // console.log("Handle Show Edit", showEdit)
    if (showEdit.id === id) setShow({id: "", show: false})
    else setShow({id: id, show: true} )
  }

  const hideNavEdit = () => {
    // console.log("Handle Nav Edit", showEdit)
    setNavOpen(false)
    // if (showEdit.id !== "") setShow({
    //   id: showEdit.id,
    //   show: false
    // })
  }

  return(
    <div style = {styles.container} className = "appContainer">
      {
        navOpen &&
        <NavBar openNav = {openNav}/>
      }
      
      <div 
        style = {styles.mainContainer} 
        onTouchStart = {hideNavEdit} 
        onMouseDown = {hideNavEdit}
      >
        <Header openNav = {openNav}/>
        <Routes>
          <Route path="/" element = {<LandingPage />} />
          <Route path="planner" element = {<Planner />} /> 
          <Route path="transactions" element = {
            <Transactions 
              user = {user} 
              handleShowEdit = {handleShowEdit}
              showEdit = {showEdit}
              />
          } />
          <Route path="transactions/add" element = {<AddTransaction />} />
          <Route path = "bills" element = {<Bills />} />
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