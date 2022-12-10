import { useEffect, useState } from "react"

import account from "../models/account"

const LandingPage = () => {
    const [balance, setBalance] = useState(0)

    const styles = {
        container: {
            border: "1px solid red",
        },
        textTest: {
            fontSize: "10vw"
        },
        income: {
            backgroundColor: "green"
        },
        balance: {
            backgroundColor: balance > 0 ? "green" : "red"
        },
        expenses: {
            backgroundColor: "red"
        }
    }

    const getBalance = () => {
        setBalance(account.totalIncome - account.totalExpense)
    }

    useEffect(() => {
        getBalance()
    }, [])

    return(
        <div style = {styles.container}>
            <div>
                <p style = {styles.income}>Income: ${account.totalIncome}</p>
                <p style = {styles.balance}>Balance: ${balance}</p>
                <p style = {styles.expenses}>Expenses: ${account.totalExpense}</p>
            </div>
        </div>
    )
}

export default LandingPage


