import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './containers/LandingPage';
import NavBar from './containers/NavBar';
import Planner from './containers/Planner';

const App = () => {
  return(
    <div style = {styles.container}>
      <NavBar />
      <Routes>
        <Route path="/" element = {<LandingPage />} />
        <Route path="planner" element = {<Planner />} /> 
      </Routes>
    </div>
  )
  
}

export default App;

const styles = {
  container: {
      display: "flex",
      flexDirection: "column",
      height: "99.8vh",
      width: "98.5hh",
      border: "1px solid black",
  },
  textTest: {
      fontSize: "10vw"
  }
}