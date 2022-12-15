import { NavLink } from "react-router-dom"

const NavBar = (props) => {
    return (
        <div 
            style={styles.container}
            className = "navBar"
            hidden = {props.navOpen}
            >
            <NavLink to="/">Home</NavLink>
            <NavLink to="planner">Planner</NavLink>
            <NavLink to="transactions">Transactions</NavLink>
        </div>
    )
}

export default NavBar

const styles = {
    container: {
        // border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
}