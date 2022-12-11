import { useEffect, useState } from "react"

import account from "../models/account"


const Summary = () => {
    const [balance, setBalance] = useState(0)
    const styles = {
        accountSummary: {
            display: "flex",
            justifyContent: "center",
            alignItem: "stretch",
            border: "1px solid blue",
            width: "100%",
            height: "5%",
            textAlign: "center",
            margin: "0 auto"
            
        },
        balance: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0",
            width: "33.33%",
            backgroundImage: balance > 0 ? "linear-gradient(darkGreen, #4af241, darkGreen)" : "linear-gradient(red, #f24141, red)",
            
        },
        container: {
            width: "100%",
            height: "88%",
            border: "1px solid red",
            color: "white",
            fontSize: "2vw",
            fontWeight: "700"
        },
        expenses: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0",
            width: "33.33%",
            height: "100%",
            backgroundImage: "linear-gradient(#800800, #f24141, #800800)",
        },
        income: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "33.33%",
            backgroundImage: "linear-gradient(darkGreen, #4af241, darkGreen)",
            margin: "0",
            
        },
        textTest: {
            fontSize: "10vw"
        }, 
    }

    const getBalance = () => {
        setBalance(account.totalIncome - account.totalExpense)
    }

    useEffect(() => {
        getBalance()
    }, [])

    return(
    <div style = {styles.accountSummary}>
        <p style = {styles.income}>Income: ${account.totalIncome}</p>
        
        <p style = {styles.expenses}>Expenses: ${account.totalExpense}</p>

        <p style = {styles.balance}>Balance: ${balance}</p>
    </div>
    )
}

export default Summary