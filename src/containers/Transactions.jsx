import { useEffect, useState } from "react"
import Summary from "../components/Summary"
import Transaction from "../components/Transaction"
import TransactionTitles from "../components/TransactionTitles"
import transactions from "../models/transcations"
import EditTransaction from "./EditTransaction"

const Transactions = (props) => {

    const [transactionList, setTransactionList] = useState( props.user.username === "Guest" ? transactions : [])
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

    const editTransaction = (event, updatedTransaction) => {
        let { name, value } = event.target 
        let newTranscationList = transactionList.map(transaction => { if (transaction.id !== updatedTransaction.id) return transaction
            else {
                if(value.indexOf('.') > -1 && (value.indexOf('.') + 3 < value.length) ) return
                if(name === "amount") {
                    if (value > 9999999) return transaction
                    return {...transaction, [name]: parseInt(value)}
                } else return {...transaction, [name]: value}
            }
            
            })
        setTransactionList(newTranscationList)
    }

    useEffect( ()=>{
        // console.log(transactionList)
        setSummary(()=>{
            let income = 0
            let expense = 0
            let balance = 0
            transactionList.forEach(transaction => {
                if(transaction.type === "income") income += transaction.amount 
                else expense += transaction.amount
            })
            balance = income - expense
            return {
                totalIncome: income,
                totalExpense: expense,
                balance: balance
            };
        })

    },[transactionList])
    // console.log("Summary Upper", summary)
    return(
        <div style = {styles.container}> 
            <Summary 
                summary = {summary}
            />
            <div style = {styles.transactionsContainer} className = "transactionsContainer">
                <TransactionTitles />
                {
                    
                    transactionList.sort((a, b) => new Date(b.date) - new Date(a.date)).reverse().map(transaction=> 
                        <>
                            <Transaction 
                                key = {transaction.id}
                                transaction = {transaction}
                                handleShowEdit = {props.handleShowEdit}
                                showEdit = {props.showEdit}
                            />
                            <EditTransaction 
                                transaction = {transaction}
                                editTransaction = {editTransaction}
                            />
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Transactions