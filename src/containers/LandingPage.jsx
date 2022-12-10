import { useEffect, useState } from "react"

import account from "../models/account"

const LandingPage = () => {
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
            backgroundImage: balance > 0 ? "linear-gradient(lightGreen, green, darkGreen)" : "linear-gradient(lightRed, red, darkRed)",
            
        },
        container: {
            width: "100%",
            height: "88%",
            border: "1px solid red",
        },
        expenses: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0",
            width: "33.33%",
            height: "100%",
            backgroundImage: "linear-gradient(#f76459, red, #800800)",
        },
        income: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "33.33%",
            backgroundImage: "linear-gradient(lightGreen, green, darkGreen)",
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
        <div style = {styles.container}>
            <div style = {styles.accountSummary}>
                <p style = {styles.income}>Income: ${account.totalIncome}</p>
                
                <p style = {styles.expenses}>Expenses: ${account.totalExpense}</p>

                <p style = {styles.balance}>Balance: ${balance}</p>
            </div>
        </div>
    )
}

export default LandingPage


