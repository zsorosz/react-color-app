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
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        "& a": {
            color: "white",
            margin: 0
        }
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        // gridTemplateColumns: "repeat(3, 30%)",
        // gridGap: "5%"
    },
    miniPaletteContainer: {
        width: "30%",
        height: "30%",
        // margin: "1rem"
    }
}
