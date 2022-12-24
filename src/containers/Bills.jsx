import { useState } from "react"
import Bill from "./Bill"

const Bills = () => {
    const [bills, setBills] = useState([1])
    return(
    <div style={Styles.container}>
        <h1>Bills</h1>
        <div style={Styles.billsContainer}>
            {bills.map(bill => <Bill />)}
        </div>
        
    </div>)
}

export default Bills

const Styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid red"
    },
    billsContainer: {
        display: "flex",
        justifyContent: "center",
        // border: "1px solid blue",
        width: "100%"
    }
}