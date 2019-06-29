import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import Weapon from './Weapon';

const Score = ({ participant, points, type, hide, isWinner }) => {
    return (
        <div className={`row align-items-center ${styles.container}`}>
            <div className="col text-center">
                <div className={styles.label}>
                    {participant}
                </div>
            </div>
            <div className="col text-center">
                {
                    hide
                        ? <Weapon
                            hide
                        />
                        : <Weapon
                            type={type}
                            isWinner={isWinner}
                        />
                }
            </div>
            <div className="col">
                <div className={styles.points}>
                    {points} PT
                </div>
            </div>
        </div>
    );
}

const styles = {
    loading: css({
        fontSize: 50,
        color: "#F012BE",
        textAlign: 'center'
    }),
    container: css({
        margin: "30px 0px 30px 0px",
        color: "#F012BE"
    }),
    label: css({
        fontSize: 30,
        color: "#F012BE"
    }),
    points: css({
        textAlign: "center",
        margin: "0 auto",
        width: 60,
        fontSize: 30,
        border: "4px solid #00b09b",
        color: "#F012BE",
        padding: 5,
        borderRadius: 5
    })
};

Score.propTypes = {
    /** Participante */
    participant: PropTypes.string,

    /** Puntaje */
    points: PropTypes.number,

    /** Tipo */
    type: PropTypes.string,

    /** Si es oculto */
    hide: PropTypes.bool,

    /** Ganador */
    isWinner: PropTypes.bool
}

export default Score;