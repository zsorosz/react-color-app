export default {
    root: {
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    container: {
        width: "60%",
        height: "100%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
    },
    nav: {
        display: "flex",
        justifyContent: "space-between",
        color: "white",
        "& h1": {
            margin: "1rem"
        }
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        // gridTemplateColumns: "repeat(3, 30%)",
        // gridGap: "5%"
    },
    miniPaletteContainer: {
        width: "25%",
        height: "30%",
        margin: "1rem"
    }
}
