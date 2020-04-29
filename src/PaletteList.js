import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

const styles = {
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
        // flexWrap: "wrap"
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
        // display: "flex",
        // flexWrap: "wrap",
    }
}

class PaletteList extends Component {
    goToPalette(id){
        this.props.history.push(`/palette/${id}`);
    }
    render(){
        const { palettes, classes } = this.props;
        return(
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                    </nav>
                    <div className={classes.palettes}>
                        {palettes.map(palette => (
                            <p>
                                <MiniPalette {...palette} handleClick={() => this.goToPalette(palette.id)} />
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);