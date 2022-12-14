import { useEffect, useState } from "react"

const BalanceBar = (props) => {
    const [percentage, setPercentage] = useState(props.balance % props.totalIncome)

    const styles = {
        container: {

        },
        barContainer: {
            height: "15vh",
            backgroundColor: "green",
            backgroundImage: `linear-gradient(to right, rgb() ${100 - percentage}%, rgb(240, 60, 60) ${percentage}%)`
        },
        circleContainer: {
            width: "100%", 
            height: "100%",
            fill: "none",
            stroke: "#eee",
            strokeWidth: 3.8,
        },
        outerCircle: {
            cx:"10",
            cy:"10",
            r:"50",
            fill:"none",
            // stroke: "red",
            strokeWidth: 10,
            strokeLinecap: "round" ,
            animation: "progress 1s ease-out forwards"
        }
    }

    return(
        <div style={styles.container}>
            {/* <div style={styles.barContainer}>{props.balance.totalExpense}%</div> */}
            <svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" width="100" height="100">

                <defs>
                    <linearGradient id="grad1">
                    <stop offset="0%" stop-color="red"/>
                    <stop offset="100%" stop-color="red" stop-opacity="0" />
                    </linearGradient>
                </defs>
            <circle  style = {styles.outerCircle}/>
            </svg>
        </div>
    )
}

export default BalanceBar