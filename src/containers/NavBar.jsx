import { NavLink } from "react-router-dom"
import '../App.css'
const NavBar = (props) => {
    return (
        <div style={styles.container}>
            <NavLink to="/" onClick={props.openNav}>Home</NavLink>
            <NavLink to="planner" onClick={props.openNav}>Planner</NavLink>
            <NavLink to="transactions" onClick={props.openNav}>Transactions</NavLink>
            <NavLink to="bills" onClick={props.openNav}>Bills</NavLink>
        </div>
    )
}

export default NavBar

const styles = {
    container: {
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 10,
        marginTop: -20,
        marginBottom: -20,
        boxShadow: "1px 1px 10px 1px black",
        overflow: "hidden",
        width: "15vh",
        height: "100%",
        backgroundColor: "white",
        position: "absolute"
    },
}