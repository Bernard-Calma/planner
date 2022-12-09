const OpenNav= (props) => {
   
    const openNavBar = () => {
        
    }
    return(
        <div style = {styles.container}>
            <img 
                src="https://img.icons8.com/fluency/512/menu-rounded.png" 
                alt="navButton" 
                style = {styles.navButton}
                />
        </div>
    )
}

export default OpenNav

const styles = {
    container: {
        
    },
    navButton: {
        width: "5%",
        aspectRatio: 1/2,
        objectFit: "contain",
        // mixBlendMode: "color-burn"
    }
}