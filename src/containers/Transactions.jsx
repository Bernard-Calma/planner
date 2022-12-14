import { useState } from "react"
import { NavLink } from "react-router-dom"
import Summary from "../components/Summary"
import Transaction from "../components/Transaction"
import TransactionTitles from "../components/TransactionTitles"

import transactions from "../models/transcations"
import AddTransaction from "./AddTransaction"

const Transactions = () => {

    const [transactionList, setTransactionList] = useState(transactions)
    const styles = {
        container: {
            width: "100%",
            height: "88%",
            border: "1px solid red",
            fontSize: "2vw",
            fontWeight: "700"
        },
        transactionsContainer: {
            border: "2px solid green",
            height: "inherit"
        },
    }

    return(
        <div style = {styles.container}>
            <Summary />
            <div style = {styles.transactionsContainer}>
                <TransactionTitles />
                {
                    transactionList.map((transaction) => 
                        <Transaction transaction = {transaction}/>
                    )
                }
            </div>
            <NavLink to="add">Add Transaction</NavLink>
        </div>
    )
}

export default Transactions