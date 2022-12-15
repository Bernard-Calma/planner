import { useEffect, useState } from "react"
import Summary from "../components/Summary"
import Transaction from "../components/Transaction"
import TransactionTitles from "../components/TransactionTitles"
import transactions from "../models/transcations"

const Transactions = () => {

    const [transactionList, setTransactionList] = useState(transactions)
    const [summary, setSummary] = useState({
        totalIncome: 0,
        totalExpense: 0,
        balance: 0
    })
    const styles = {
        container: {
            width: "100%",
            height: "88%",
            // border: "1px solid red",
            fontSize: "2vw",
            fontWeight: "700",
            
        },
        transactionsContainer: {
            // border: "2px solid green",
            backgroundColor: "white",
            margin: "5px auto",
            height: "80%",
            width: "98%",
            overflow: "scroll"
        },
    }
    useEffect( ()=>{
        // console.log(transactionList)
        setSummary(()=>{
            let income = 0
            let expense = 0
            let balance = 0
            transactionList.forEach(transaction => {
                if(transaction.income) income += transaction.amount 
                else expense += transaction.amount
            })
            balance = income - expense
            return {
                totalIncome: income,
                totalExpense: expense,
                balance: balance
            };
        })

    },[])
    // console.log("Summary Upper", summary)
    return(
        <div style = {styles.container}>
            <Summary 
                summary = {summary}
            />
            <div style = {styles.transactionsContainer} className = "transactionsContainer">
                <TransactionTitles />
                {
                    transactionList.map((transaction) => 
                        <Transaction 
                        key = {transaction.id}
                        transaction = {transaction}/>
                    )
                }
            </div>
        </div>
    )
}

export default Transactions