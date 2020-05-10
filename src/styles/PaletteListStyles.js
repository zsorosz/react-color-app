import sizes from './sizes';
import bg from './bg.svg';

export default {
    "@global": {
        ".fade-exit": {
            opacity: 1
        },
        ".fade-exit-active": {
            opacity: 0,
            transition: "opacity .5s ease-out"
        }
    },
    root: {
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        /* background by SVGBackgrounds.com */
        backgroundColor: "#040a29",
        backgroundImage: `url(${bg})`,
    },
    container: {
        width: "50%",
        height: "100%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        [sizes.down("lg")]: {
            width: "80%",
        },
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
        // gridGap: "5%",
        [sizes.down("md")]: {
            width: "80%",
            margin: "auto"
        },
    },
    miniPaletteContainer: {
        width: "30%",
        height: "30vh",
        
        [sizes.down("md")]: {
            width: "46%",
        },
        [sizes.down("sm")]: {
            width: "100%",
        },
    }
}
