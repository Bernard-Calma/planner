import { useState } from "react"
import { useNavigate } from "react-router-dom"
import transactions from "../models/transcations"

const AddTransaction = () => {
    const navigate = useNavigate()

    const [transaction, setTransaction] = useState({
        id: 0,
        date: "",
        amount: "$",
        type: null,
        description: ""
    })
    console.log(transaction)
    const styles = {
        container: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            color: "black",
            textAlign: "center",
            margin: 5,
            border: "1px solid",
            borderRadius: "20px",
            padding: 20,
            backgroundColor: "gray"
        },
        currencyContainer: {
            border: "1px solid",
            height: "5vh",
            width: "100%",
            display: "flex",
            alignSelf: "center",
            overflow: "hidden",
            width: "50%",
            alignSelf: "center",
            backgroundColor: "white"
            
        },
        currencyInput: {
            fontSize: "4vw", 
            padding: 0,
            borderLeft: 0,
            border: "none",
            
            
        },
        currencySybmol: {
            position: "relative", 
            border: "unset",
            fontSize: "3vw",
            alignSelf: "center"
            // paddingBottom: 7,
            // paddingTop: 25,
            
        },
        form: {
            display: "flex",
            height: "80vh",
            flexDirection: "column",
            justifyContent: "space-between",
            fontSize: "5vw"
        },
        input: {
            fontSize: "3vh", 
            width: "50%",
            alignSelf: "center",
            marginLeft: 10
        },
        inputCheckbox: {
            alignSelf: "center",
            width: "5vh",
            height: "5vh"
        },
        inputDiv: {
            margin: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
        },
        submitDiv: {
            justifyContent: "center",
        },
    }

    const handleChange = (event) => {
        
        event.preventDefault()
        if(event.target.name === "amount" && event.target.value > 9000000000) return
        if(event.target.value.indexOf('.') > -1 && (event.target.value.indexOf('.') + 3 < event.target.value.length) ) return
        setTransaction({...transaction, [event.target.name]: event.target.value})
        // console.log(event.target.value)
        
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log("Transaction: ", transaction)
        // console.log("Transactions: ", transactions)
        const transactionToAdd = {...transaction, amount: parseInt(transaction.amount), date: transaction.date, }
        transactions.push(transactionToAdd)
        navigate("/transactions")
    }

    const handleOptionChange = (event) => {
        let { name, value} = event.target
        setTransaction({...transaction, [name]: value})
    }

    return(
        <div style = {styles.container}>
            <form style = {styles.form} onSubmit={handleSubmit}>
                <div style = {styles.inputDiv}>
                    <label htmlFor= "Date">Date: </label>
                    <input style = {styles.input} type = "date" id = "date" name = "date" value = {transaction.date} onChange = {handleChange} required/>
                </div>
                
                <div style = {styles.inputDiv}>
                    <label htmlFor= "description">Description: </label>
                    <input style = {styles.input} type = "text" id = "description" name = "description" value = {transaction.description} onChange = {handleChange} required/>
                </div>
                
                <div style = {styles.inputDiv}>
                    <label htmlFor= "amount">Amount: </label>
                    <div style = {styles.currencyContainer}>
                        <span style={styles.currencySybmol}>$</span>
                        <input style = {styles.currencyInput} patern="[0-9]" type = "number" id = "amount" name = "amount" value = {transaction.amount} 
                            onChange = {handleChange}
                            onKeyDown = {event => ["e","-","="].includes(event.key) && event.preventDefault()}
                            required
                            />
                    </div>
                </div>

                <div style = {styles.inputDiv}>
                    <label htmlFor= "income">Income: </label>
                    <input style = {styles.inputCheckbox} type = "radio" id = "income" name = "type" value = "income" onChange = {handleOptionChange} required/>
                    <label htmlFor="expense">Expense: </label>
                    <input style = {styles.inputCheckbox} type = "radio" id = "expense" name = "type" value = "expense" onChange = {handleOptionChange} required/>
                   
                </div>
                
                <div className = "submitDiv">
                    <input type = "submit" id = "submitAdd" name="submitAdd" value = "submit"/>
                </div>
            </form>
        </div>
    )
}

export default AddTransaction