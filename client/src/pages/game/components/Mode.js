import React from 'react';
import PropTypes from 'prop-types';
import { MODE_PLAYER_COMPUTER } from '../constants';
import { css } from 'glamor';

const Mode = ({ changeMode, mode, hideButton, infoText }) => {

    /*if (scorePlayer >= 3) {
        alert(playerNumber + 'is the winner :D');
            
    } else if (scorePlayerTwo >= 3) {
        alert(playerNumber + 'is the winner :D');
    } */

    return (
        <div className={`row ${styles.container}`}>
            <div className="col text-center">
                <div className={styles.title}>
                    {mode === MODE_PLAYER_COMPUTER ? 'PLAYER VS COMPUTER' : 'PLAYER VS PLAYER'}
                </div>
                {
                    hideButton ? '' : <button className={styles.button} onClick={changeMode}> PLAY WITH THE MACHINE / PLAY WITH SOMEONE!</button>
                }
                {infoText}
            </div>
        </div>
    );
}

const styles = {
    container: css({
        margin: 30
    }),
    title: css({
        fontSize: 15,
        color: "#fff"
    }),
    button: css({
        borderRadius: 5,
        marginTop: 10
    })
}

Mode.propTypes = {
    /** Función para cambiar el modo. */
    changeMode: PropTypes.func,

    /** Modo */
    mode: PropTypes.number,

    /** Ocultar el botón */
    hideButton: PropTypes.func,

    /** Texto */
    infoText: PropTypes.string
};

export default Mode;