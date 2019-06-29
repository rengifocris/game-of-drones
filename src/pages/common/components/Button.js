import React from 'react';
import {css} from 'glamor';

const Button = ({text, onClick}) => {
    return (
        <button 
            type="button" 
            className={styles.button} 
            onClick={onClick}>
            { text }
        </button>
    )
}

const styles = {
    button : css({
        width: "100%",
        marginTop: 15,
        padding: 8,
        fontSize: 20,
        backgroundColor: "#B10DC9",
        color: "#fff",
        border: "none",
        '&:hover' : {
            cursor: "pointer"
        }
    })
}

export default Button;