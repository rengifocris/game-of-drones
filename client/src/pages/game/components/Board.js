import React from 'react';
import PropTypes from 'prop-types';
import { MODE_PLAYER_PLAYER } from '../constants';
import { css } from 'glamor';
import Mode from './Mode';
import Score from './Score';

const Board = ({
    mode,
    answerPlayer,
    answerComputer,
    scorePlayer,
    scoreComputer,
    changeMode,
    answerPlayerTwo,
    playerNumber,
    scorePlayerTwo,
    winner,
    canPlayOnline
}) => {
    console.log(canPlayOnline);
    return (
        <div>
            <Mode
                mode={mode}
                changeMode={changeMode}
                hideButton={!canPlayOnline}
                infoText={canPlayOnline == false ? "At the moment you can't play it looks like two people are playing right now, can you wait for a while? :C" : ""}
            />
            {
                mode == MODE_PLAYER_PLAYER
                    ? <Score
                        participant={'PLAYER'}
                        type={playerNumber == 1 ? answerPlayer : answerPlayerTwo}
                        points={playerNumber == 1 ? scorePlayer : scorePlayerTwo}
                        hide={
                            (playerNumber == 1 && answerPlayer && !answerPlayerTwo)
                            || (playerNumber == 0 && answerPlayerTwo && !answerPlayer)
                        }
                        isWinner={
                            (playerNumber == 1 && winner == 'playerOne')
                            || (playerNumber == 0 && winner == 'playerTwo')
                        }
                    />
                    : <Score
                        participant="COMPUTER"
                        type={answerComputer}
                        points={scoreComputer}
                    />
            }
            <div className={styles.title}>
                vs
            </div>

            {
                mode == MODE_PLAYER_PLAYER
                    ? <Score
                        participant={'YOU'}
                        type={playerNumber == 0 ? answerPlayer : answerPlayerTwo}
                        points={playerNumber == 0 ? scorePlayer : scorePlayerTwo}
                        isWinner={
                            (playerNumber == 1 && winner == 'playerTwo')
                            || (playerNumber == 0 && winner == 'playerOne')
                        }
                    />
                    : <Score
                        participant={'PLAYER'}
                        type={answerPlayer}
                        points={scorePlayer}
                    />
            }


        </div>
    );
}

const styles = {
    title: css({
        color: "#fff",
        fontSize: 18,
        textAlign: 'center',
        background: '#00b09b',  /* fallback for old browsers */
        background: '-webkit-linear-gradient(to right, #96c93d, #00b09b)',  /* Chrome 10-25, Safari 5.1-6 */
        background: 'linear-gradient(to right, #96c93d, #00b09b)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    })
}

Board.propTypes = {
    /** Modo del jugador plaver vs plaver ó payer vs computer. */
    mode: PropTypes.number,

    /** Respuesta del jugador 1. */
    answerPlayer: PropTypes.string,

    /** Respuesta de la computadora. */
    answerComputer: PropTypes.string,

    /** Puntaje del jugador 1. */
    scorePlayer: PropTypes.number,

    /** Puntaje de la computadora. */
    scoreComputer: PropTypes.number,

    /** Función para cambiar el modo. */
    changeMode: PropTypes.func,

    /** Respuesta del jugador 2. */
    answerPlayerTwo: PropTypes.string,

    /** Que jugador es 1 o 2. */
    playerNumber: PropTypes.string,

    /** Puntaje del jugador 2. */
    scorePlayerTwo: PropTypes.number,

    /** Ganador. */
    winner: PropTypes.string,

    /** Bandera para identificar si es posible jugar online. */
    canPlayOnline: PropTypes.bool
};

export default Board;