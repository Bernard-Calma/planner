import Summary from "../components/Summary"

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
    }

    return(
        <div style = {styles.container}>
            <Summary />
        </div>
    )
}

export default Transactions