import Summary from "../components/Summary"
import TransactionTitles from "../components/TransactionTitles"

const Transactions = () => {

    const styles = {
        container: {
            width: "100%",
            height: "88%",
            border: "1px solid red",
            color: "white",
            fontSize: "2vw",
            fontWeight: "700"
        },
        transactionsContainer: {
            border: "2px solid green",
            height: "inherit"
        },
    }

    return(
        <div style = {styles.container}>
            <Summary />
            <div style = {styles.transactionsContainer}>
                <TransactionTitles />
            </div>
        </div>
    )
}

export default Transactions