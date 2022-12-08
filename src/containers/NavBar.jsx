import { NavLink } from "react-router-dom"

const NavBar = () => {

    return (

        <div style={styles.container}>
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
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 5,
    },
}