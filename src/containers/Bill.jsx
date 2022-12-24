const Bill = () => {
    return(
        <div style={Styles.container} className = "billsTtitleContainer">
            <h2>Date</h2>
            <h2>Name</h2>
            <h2>Amount</h2>
            <h2>Status</h2>
        </div>
    )
}

export default Bill

const Styles = {
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        border: "5px solid black",
        width: "100%",
    }
}