import { useState } from "react"
import EditTransaction from "../containers/EditTransaction"

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
        },
        title: {
            width: "100%",
            height: "inherit",
            textAlign: "center",
            margin: 0,
            overflow: "hidden"
        },
    }

    const handleChange = (event) => {
        let { name, value} = event.target
        if(value.indexOf('.') > -1 && (value.indexOf('.') + 3 < value.length) ) return
        if(name === "amount") {
            if (value > 9000000000) return
            setTransaction({...transaction, [name]: parseInt(value)})
        } else setTransaction({...transaction, [name]: value})
        // console.log(event.target.value)
    }

    return (
        <div>
            <div style = {styles.container} onClick = {() => props.handleShowEdit(props.transaction.id)}>
                <p style={styles.title}>{`${new Date(transaction.date).toUTCString().slice(0,11)}`}</p>
                <p style={styles.title}>${transaction.amount.toFixed(2)}</p>
                <p style={styles.title}>{transaction.description}</p>
                <p style={styles.title}>{transaction.type === "income" ? "Income" : "Expense"}</p>
            </div>
            {
                props.showEdit.show && props.showEdit.id === props.transaction.id &&
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