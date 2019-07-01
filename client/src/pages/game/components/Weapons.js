import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import Weapon from './Weapon';

const Weapons = ({ fireWeapon, disabled, textInfo }) => {
    return (
        <div className={`row align-items-center justify-content-center text-center ${styles.container}`}>
            <div className={`col`}>
                <Weapon
                    type='rock'
                    onClick={() => fireWeapon('rock')}
                    disabled={disabled}
                />
            </div>
            <div className={`col`}>
                <Weapon
                    type='paper'
                    onClick={() => fireWeapon('paper')}
                    disabled={disabled}
                />
            </div>
            <div className={`col`}>
                <Weapon
                    type='scissors'
                    onClick={() => fireWeapon('scissors')}
                    disabled={disabled}
                />
            </div>
            <div className={`col-12 ${styles.text}`}>
                Choose your super power
            </div>
            {textInfo}
        </div>
    );
}

const styles = {
    container: css({
        marginTop: 50,
        backgroundColor: "#476b96",
        padding: "20px 10px 20px 10px",
        bottom: "0",
        background: '#00b09b',  /* fallback for old browsers */
        background: '-webkit-linear-gradient(to right, #96c93d, #00b09b)',  /* Chrome 10-25, Safari 5.1-6 */
        background: 'linear-gradient(to right, #96c93d, #00b09b)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    }),
    text: css({
        color: "#fff",
        marginTop: 20,
        fontSize: 20
    })
};

Weapons.propTypes = {
    /** Que disparo realizo. */
    fireWeapon: PropTypes.string,

    /** Bandera para saber si esta desactivado. */
    disabled: PropTypes.bool,

    /** Texto */
    textInfo: PropTypes.string
}

export default Weapons;