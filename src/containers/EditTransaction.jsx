import { useState } from "react"
import { useNavigate } from "react-router-dom"
import transactions from "../models/transcations"

const EditTransaction = () => {
    const navigate = useNavigate()

    const [transaction, setTransaction] = useState({
        id: 0,
        date: "",
        amount: "$",
        income: true,
        description: ""
    })

    const styles = {
        container: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            color: "black",
            textAlign: "center",
            margin: 5,
            margin: "auto",
            border: "1px solid",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            backgroundColor: "gray",
            width: "95%",
            marginTop: -10,
            boxShadow: "0px 5px 10px black"
        },
        currencyContainer: {
            border: "1px solid",
            display: "flex",
            alignSelf: "center",
            overflow: "hidden",
            width: "50%",
            alignSelf: "center",
            backgroundColor: "white"
            
        },
        currencyInput: {
            fontSize: "2vw", 
            padding: 0,
            borderLeft: 0,
            border: "none",
            
            
        },
        currencySybmol: {
            position: "relative", 
            border: "unset",
            fontSize: "2vw",
            alignSelf: "center"
            // paddingBottom: 7,
            // paddingTop: 25,
            
        },
        form: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            fontSize: "2vw"
        },
        input: {
            fontSize: "2vh", 
            width: "50%",
            alignSelf: "center",
            marginLeft: 10
        },
        inputCheckbox: {
            alignSelf: "flex-start",
            width: "2vh",
            height: "2vh"
        },
        inputDiv: {
            margin: 2,
            display: "flex",
            flexDirection: "row",
            marginBottom: 5,
        },
        submitDiv: {
            margin: "auto"
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

    return(
        <div style = {styles.container}>
            <form style = {styles.form} onSubmit={handleSubmit}>
                <div>
                    <div style = {styles.inputDiv}>
                        <label htmlFor= "Date">Date: </label>
                        <input style = {styles.input} type = "date" id = "date" name = "date" value = {transaction.date} onChange = {handleChange}/>
                    </div>
                    
                    <div style = {styles.inputDiv}>
                        <label htmlFor= "description">Description: </label>
                        <input style = {styles.input} type = "text" id = "description" name = "description" value = {transaction.description} onChange = {handleChange}/>
                    </div>
                    
                    <div style = {styles.inputDiv}>
                        <label htmlFor= "amount">Amount: </label>
                        <div style = {styles.currencyContainer}>
                            <span style={styles.currencySybmol}>$</span>
                            <input style = {styles.currencyInput} patern="[0-9]" type = "number" id = "amount" name = "amount" value = {transaction.amount} 
                                onChange = {handleChange}
                                onKeyDown = {event => ["e","-","="].includes(event.key) && event.preventDefault()}
                                />
                        </div>
                    </div>

                    <div style = {styles.inputDiv}>
                        <label htmlFor= "income">Income: </label>
                        <input style = {styles.inputCheckbox} type = "checkbox" id = "income" name = "income" value = {transaction.income} onChange = {handleChange}/>
                    </div>
                </div>
                
                <div style={styles.submitDiv} >
                    <input type = "submit" id = "submitEdit" name="submitEdit" value = "submit" />
                </div>
            </form>
        </div>
    )
}

export default EditTransaction