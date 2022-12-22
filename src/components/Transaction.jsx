import { useState } from "react"
import EditTransaction from "../containers/EditTransaction"

const Transaction = (props) => {
    
    const [transaction, setTransaction] = useState(props.transaction)
    const [show, setShow] = useState(false)
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
        },
    }

    const handleClick = () => {
        setShow(!show)
    }

    return (
        <div>
            <div style = {styles.container} onClick = {handleClick}>
                <p style={styles.title}>{new Date(transaction.date).toLocaleDateString().slice(0, -5)}</p>
                <p style={styles.title}>${transaction.amount.toFixed(2)}</p>
                <p style={styles.title}>{transaction.description}</p>
                <p style={styles.title}>{transaction.income ? "Income" : "Expense"}</p>
            </div>
            {
                show &&
                <div>
                    <EditTransaction />
                </div>
            }
            
        </div>
        
    )
}

export default Transaction