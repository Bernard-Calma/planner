import BalanceBar from "./BalanceBar"

const Summary = (props) => {
    // console.log("Props", props)
    const styles = {
        accountSummary: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItem: "stretch",
            // border: "1px solid blue",
            width: "98%",
            height: "20%",
            textAlign: "center",
            margin: "5px auto",
            backgroundColor: "white",
            boxShadow: "5px 5px 10px rgb(227, 222, 222)",
            
        },
        balance: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0",
            fontSize: "5vh",
            
        },
        buttomSummary: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        },
        expenses: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0",
            fontSize: "3vh",
        },
        income: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0",
            fontSize: "3vh",
            
        },
        summaryContainer: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // border: "1px solid blue",
            textAlign: "center",
            width: "33.33%",
            fontSize: "1vh",
        }
    }
    return(
    <div style = {styles.accountSummary}>
        <div style = {styles.summaryContainer}>
            {/* <p style = {styles.balance}>${balance}</p>
            <p>Balance</p> */}
        </div>
        <div style={styles.buttomSummary}>
            <div style = {styles.summaryContainer}>
                <p style = {styles.income}>${props.summary.totalIncome.toFixed(2)}</p>
                <p>Income</p>
            </div>
            <div style = {styles.summaryContainer}>
                <p style = {styles.expenses}>${props.summary.totalExpense.toFixed(2)}</p>
                <p>Expenses</p>
            </div>
        </div>  
        <BalanceBar 
            summary = {props.summary}
        />

    </div>
    )
}

export default Summary