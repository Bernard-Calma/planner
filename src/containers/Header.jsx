import { NavLink } from "react-router-dom"
import OpenNav from "../components/OpenNav"

const Header = (props) => {

    const Styles = {
        container: {
            display: "flex",
            height: "5vh",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "20px",
            marginRight: "20px",
            margin: "auto",
            fontSize: "5vh",
        },
        text: {
            textDecoration: "none",
            color: "black"
        }
    }
    return(
        <div style = {Styles.container}>
            <OpenNav 
            openNav = {props.openNav}
            />
            <NavLink to="add" style={Styles.text}>+</NavLink>
        </div>
    )
}

export default Header
