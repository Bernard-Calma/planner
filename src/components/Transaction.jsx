import { useState } from "react"

const Transaction = (props) => {
    
    const [transaction, setTransaction] = useState(props.transaction)

    const styles = {
        container: {
            display: "flex",
            justifyContent: "space-around",
            border: "1px solid black",
            margin: 10,
            boxShadow: "5px 5px 5px black",
            borderRadius: 20,
            backgroundColor: transaction.income ? "green" : "#800800"
        },
        title: {
            color: transaction.income ? "black" : "white",
            width: "100%",
            height: "inherit",
            textAlign: "center",
            margin: 0,
        },
    }

    return (
        <div style = {styles.container}>
            <p style={styles.title}>{transaction.date}</p>
            <p style={styles.title}>${transaction.amount.toFixed(2)}</p>
            <p style={styles.title}>{transaction.description}</p>
        </div>
    )
}

export default Transaction