import { useState } from "react"
import EditTransaction from "../containers/EditTransaction"

const Transaction = (props) => {
    
    const [transaction, setTransaction] = useState(props.transaction)
    const [showEdit, setShow] = useState(false)
    const styles = {
        container: {
            display: "flex",
            justifyContent: "space-around",
            border: "1px solid black",
            margin: 10,
            boxShadow: "5px 5px 5px black",
            borderRadius: 20,
        },
        title: {
            width: "100%",
            height: "inherit",
            textAlign: "center",
            margin: 0,
            overflow: "hidden"
        },
    }

    const handleClick = () => {
        setShow(!showEdit)
    }

    const handleChange = (event) => {
        event.preventDefault()
        if(event.target.value.indexOf('.') > -1 && (event.target.value.indexOf('.') + 3 < event.target.value.length) ) return
        if(event.target.name === "amount") {
            if (event.target.value > 9000000000) return
            setTransaction({...transaction, [event.target.name]: parseInt(event.target.value)})
        } else setTransaction({...transaction, [event.target.name]: event.target.value})
        // console.log(event.target.value)
    }

    return (
        <div>
            <div style = {styles.container} onClick = {handleClick}>
                <p style={styles.title}>{`${new Date(transaction.date).getUTCMonth()} / ${new Date(transaction.date).getUTCDate()}`}</p>
                <p style={styles.title}>${transaction.amount.toFixed(2)}</p>
                <p style={styles.title}>{transaction.description}</p>
                <p style={styles.title}>{transaction.type === "income" ? "Income" : "Expense"}</p>
            </div>
            {
                showEdit &&
                <div>
                    <EditTransaction 
                        transaction = {transaction}
                        handleChange = {handleChange}
                    />
                </div>
            }
            
        </div>
        
    )
}

export default Transaction