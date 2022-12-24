import { useState } from "react"
import Bill from "./Bill"

const Bills = () => {
    const [bills, setBills] = useState([{
        id: 0,
        date: "08/30/2023",
        name: "gas",
        amount: 50,
        paid: false,

    }])
    return(
    <div style={Styles.container}>
        <h1>Bills</h1>
        <div style={Styles.billsTitles} className = "billsTtitleContainer">
            <h2>Date</h2>
            <h2>Name</h2>
            <h2>Amount</h2>
            <h2>Status</h2>
        </div>
        <div style={Styles.billsContainer}>
            {bills.map(bill => <Bill bill = {bill} key = {bill.id}/>)}
        </div>
        
    </div>)
}

export default Bills

const Styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid red",
        height: "94%",
        overflow: "hidden",
        
    },
    billsContainer: {
        display: "flex",
        justifyContent: "center",
        // border: "1px solid blue",
        width: "95%"
    },
    billsTitles: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        border: "5px solid black",
        width: "95%"
        
    }
    
}