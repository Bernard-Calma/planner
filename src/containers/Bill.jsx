const Bill = (props) => {
    return(
        <div style={Styles.container} className = "billContainer">
            <p>{props.bill.date}</p>
            <p>{props.bill.name}</p>
            <p>${props.bill.amount.toFixed(2)}</p>
            <p>{`${props.bill.paid}`}</p>
        </div>
    )
}

export default Bill

const Styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        border: "1px solid black",
        width: "100%",
    }
}