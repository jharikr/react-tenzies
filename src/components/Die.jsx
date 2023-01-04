function Die({ value, held, toggle }) {
    const styles = {
        backgroundColor: held ? "#59E391" : "white"
    }

    return (
        <div className="die"
            style={styles}
            onClick={toggle}
        >
            <h2 className="die-num main-text">{value}</h2>
        </div>
    )
}

export default Die