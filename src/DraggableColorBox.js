import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { SortableElement } from 'react-sortable-hoc';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        position: "relative",
        display: "inline-block",
        cursor: "pointer",
        marginBottom: "-6px",
        "&:hover svg": {
            color: "white",
            transform: "scale(1.5)"
        }
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "rgba(0, 0, 0, 0.5)",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between"
    },
    deleteIcon: {
        transition: "all 0.3s ease-in-out"
    }
};

const DragabbleColorBox = SortableElement((props) => {
    const { classes, handleClick, name, color } = props;
    return(
        <div className={classes.root} style={{ backgroundColor: color}}>
            <div className={classes.boxContent}>
                <span>{name}</span>
                <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
            </div>
        </div>
    )
})

export default withStyles(styles)(DragabbleColorBox);
