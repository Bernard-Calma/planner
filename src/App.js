import './App.css';
import LandingPage from './containers/LandingPage';
import NavBar from './containers/NavBar';

const App = () => {
  return(
    <div style = {styles.container}>
      <NavBar />
      <LandingPage />
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