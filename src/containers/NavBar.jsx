import { NavLink } from "react-router-dom"

const NavBar = (props) => {
    console.log(props.visibility)
    return (
        <div 
            style={styles.container}
            className = "navBar"
            hidden = {props.navOpen}
            >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/planner">Planner</NavLink>
        </div>
    )
}

export default NavBar

const styles = {
    container: {
        // border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: 5,
    },
}