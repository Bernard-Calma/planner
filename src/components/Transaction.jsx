const Transaction = (props) => {
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

    return (
        <div>
            <div style = {styles.container} onClick = {() => props.handleShowEdit(props.transaction.id)}>
                <p style={styles.title}>{`${new Date(props.transaction.date).toUTCString().slice(0,11)}`}</p>
                <p style={styles.title}>${props.transaction.amount.toFixed(2)}</p>
                <p style={styles.title}>{props.transaction.description}</p>
                <p style={styles.title}>{props.transaction.type === "income" ? "Income" : "Expense"}</p>
            </div>

            
        </div>
        
    )
}

export default Transaction