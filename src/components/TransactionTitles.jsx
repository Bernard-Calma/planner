const TransactionTitles = () => {
    
    const styles = {
        container: {
            display: "flex",
            justifyContent: "space-around",
            border: "5px solid black",
            margin: 10,
        },
        title: {
            color: "black",
            width: "100%",
            height: "inherit",
            border: "1px solid black",
            textAlign: "center",
            margin: 0,
            paddingTop: "0.7%"
        }
    }
    return(
        <div style={styles.container}>
            <p style={styles.title}>Date</p>
            <p style={styles.title}>Amount</p>
            <p style={styles.title}>Description</p>
            <p style={styles.title}>Type</p>
        </div>
    )
}

export default TransactionTitles