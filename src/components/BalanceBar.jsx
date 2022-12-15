import { useEffect, useState } from "react"

const BalanceBar = (props) => {
    const [percentage, setPercentage] = useState(props.balance % props.totalIncome)

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
            backgroundImage: `linear-gradient(to right, rgb(4, 189, 7) ${100 - percentage}%, rgb(240, 60, 60) ${percentage}%)`,
            alignItems: "center",
            borderRadius: 30,
            boxShadow: "1px 1px 5px 1px"
        },

    }
    
    return(
        <div style={styles.container}>
            <div style={styles.barContainer}>
                <p style={styles.balanceText}>${props.balance.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default BalanceBar