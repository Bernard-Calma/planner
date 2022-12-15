const BalanceBar = (props) => {
    // console.log(percentage)
    const styles = {
        container: {
            marginLeft: "1vh",
            marginRight: "1vh",
        },
        balanceText: {
            margin: "auto",
            color: "white",
            fontSize: "3vw"
        },
        barContainer: {
            display: "flex",
            height: "5vh",
            backgroundColor: "green",
            backgroundImage: `linear-gradient(to right, rgb(4, 189, 7) ${100 - (props.summary.totalExpense / props.summary.totalIncome * 100)}%, rgb(240, 60, 60) ${100 - (props.summary.totalExpense / props.summary.totalIncome * 100)}%)`,
            alignItems: "center",
            borderRadius: 30,
            boxShadow: "1px 1px 5px 1px"
        },

    }
    
    return(
        <div style={styles.container}>
            <div style={styles.barContainer}>
                <p style={styles.balanceText}>${props.summary.balance.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default BalanceBar