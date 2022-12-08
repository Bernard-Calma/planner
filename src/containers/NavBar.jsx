const NavBar = () => {

    return (

        <div style={styles.container}>
            <ul style={styles.navList}>
                <li>Home</li>
                <li>Planner</li>
            </ul>
        </div>
    )
}

export default NavBar

const styles = {
    container: {
        border: "1px solid black"
    },
    navList: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    }
}