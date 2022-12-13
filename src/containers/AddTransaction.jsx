import { useState } from "react"

const AddTransaction = () => {

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
            justifyContent: "center",
            color: "black",

        },
        currencyContainer: {
            border: "1px solid",
            height: "4hh",
            display: "flex",
            overflow: "hidden"
        },
        currencyInput: {
            fontSize: "4vw", 
            padding: 0,
            borderLeft: 0,
            border: "unset",
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
            flexDirection: "column",
            fontSize: "10vw"
        },
        input: {
            fontSize: "3vh", 
        },
        inputCheckbox: {
            alignSelf: "center",
            width: "5vh",
            height: "5vh"
        }
    }

    const handleChange = (event) => {
        
        event.preventDefault()
        if(event.target.name === "amount" && event.target.value > 9000000000) return
        setTransaction({...transaction, [event.target.name]: event.target.value})
        console.log(event.target.value)
        
    }
    return(
        <div style = {styles.container}>
            <form style = {styles.form}>
                <label htmlFor= "Date">Date: </label>
                <input style = {styles.input} type = "date" id = "date" name = "date" value = {transaction.date} onChange = {handleChange}/>

                <label htmlFor= "number">Amount: </label>
                <div style = {styles.currencyContainer}>
                    <span style={styles.currencySybmol}>$</span>
                    <input style = {styles.currencyInput} patern="[0-9]" type = "number" id = "amount" name = "amount" value = {transaction.amount} 
                        onChange = {handleChange}
                        onKeyDown = {event => ["e","-","=","."].includes(event.key) && event.preventDefault()}
                        />
                </div>
                                
                <label htmlFor= "description">Description: </label>
                <input style = {styles.input} type = "text" id = "description" name = "description" value = {transaction.description} onChange = {handleChange}/>
                <label htmlFor= "income">Income: </label>
                <input style = {styles.inputCheckbox} type = "checkbox" id = "income" name = "income" value = {transaction.income} onChange = {handleChange}/>
            </form>
        </div>
    )
}

export default AddTransaction