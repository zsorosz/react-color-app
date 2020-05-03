import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        position: "relative",
        display: "inline-block",
        cursor: "pointer",
        marginBottom: "-4px",
    }
};

function DragabbleColorBox(props) {
    return(
        <div className={props.classes.root} style={{ backgroundColor: props.color}}>
            {props.color}
        </div>
    )
}

export default withStyles(styles)(DragabbleColorBox);
