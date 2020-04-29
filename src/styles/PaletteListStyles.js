export default {
    root: {
        backgroundColor: "blue",
        maxHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    container: {
        width: "50%",
        maxHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
    },
    nav: {
        height: "10%",
        display: "flex",
        justifyContent: "space-between",
        color: "white"
    },
    palettes: {
        boxSizing: "border-box",
        maxHeight: "90vh",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%"
    }
}
