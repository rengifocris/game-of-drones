import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Header, Weapons, Board } from './components';
import actions from './actions';
import { MODE_PLAYER_COMPUTER, MODE_PLAYER_PLAYER } from './constants';
import {push} from 'connected-react-router';
import api from './api';
import * as selectors from './selectors';
import login from '../login';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class Container extends Component {

    componentDidMount(){
        const {isLogged, redirect} = this.props;
        if(!isLogged){
            redirect('/login');
        }
    }

    render() {

        const {
            mode,
            answerPlayer,
            answerComputer,
            scorePlayer,
            scoreComputer,
            fireWeapon,
            fireWeaponRemote,
            waitingResponse,
            changeMode,
            isRemote,
            playerNumber,
            answerPlayerTwo,
            scorePlayerTwo,
            playerName,
            winner,
            canPlayOnline,
            playersOnline,
            logout
        } = this.props;

    if (scorePlayer >= 3) {

        let playerwon = playerNumber == 0? 'You are ': playerNumber == 1 ? 'Your Rival is ':'';
        const options = {
            title: 'We have a winner :D',
            message: playerwon + 'the winnwer, Do you want to play revenge for your honor and pride?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    changeMode()
                    changeMode()
                }
              },
              {
                label: 'No',
                onClick: () => changeMode()
              }
            ],
            childrenElement: () => <div />,
            closeOnEscape: false,
            closeOnClickOutside: false,
            willUnmount: () => {},
            onClickOutside: () => {},
            onKeypressEscape: () => {}
        };

        confirmAlert(options);

    } else if (scorePlayerTwo >= 3) {
        let playerwon = playerNumber == 1? 'You are ': playerNumber == 0 ? 'Your Rival is ':'';
        const options = {
            title: 'We have a winner :D',
            message:  playerwon + 'the winnwer, Do you want to play revenge for your honor and pride?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    changeMode()
                    changeMode()
                }
              },
              {
                label: 'No',
                onClick: () => changeMode()
              }
            ],
            childrenElement: () => <div />,
         ///   customUI: ({ onClose }) => <div>Custom UI</div>,
            closeOnEscape: false,
            closeOnClickOutside: false,
            willUnmount: () => {},
            onClickOutside: () => {},
            onKeypressEscape: () => {}
        };

       confirmAlert(options);

    }
        return (

            <div className="row h-100">
                <div className="col-12" >
                    <Header onLogout={logout}/>
                </div>
                <div className="col-12 align-content-center">
                    {
                        <Board
                            mode={mode}
                            answerPlayer={answerPlayer}
                            answerPlayerTwo={answerPlayerTwo}
                            answerComputer={answerComputer}
                            scorePlayer={scorePlayer}
                            scorePlayerTwo={scorePlayerTwo}
                            scoreComputer={scoreComputer}
                            waitingResponse={waitingResponse}
                            changeMode={changeMode}
                            isRemote={isRemote}
                            playerNumber={playerNumber}
                            winner={winner}
                            canPlayOnline={canPlayOnline}
                        />
                    }
                </div>
                <div className="col-12  align-content-end">
                    <Weapons
                        fireWeapon={mode == MODE_PLAYER_COMPUTER ? fireWeapon : fireWeaponRemote}
                        disabled={
                            mode == MODE_PLAYER_PLAYER
                                ? ((playerNumber == 0 && answerPlayer && !answerPlayerTwo)
                                    || (playerNumber == 1 && answerPlayerTwo && !answerPlayer))
                                || playersOnline < 2
                                : false
                        }
                        textInfo={mode == MODE_PLAYER_PLAYER && playersOnline < 2 ? `Someone is coming just wait for a moment :).` : ''}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    canPlayOnline: selectors.getCanPlayOnline,
    mode: selectors.getMode,
    answerPlayer: selectors.getAnswerPlayer,
    answerPlayerTwo: selectors.getAnswerPlayerTwo,
    answerComputer: selectors.getAnswerComputer,
    scorePlayer: selectors.getScorePlayer,
    scorePlayerTwo: selectors.getScorePlayerTwo,
    scoreComputer: selectors.getScoreComputer,
    waitingResponse: selectors.getWaitingResponse,
    playerNumber: selectors.getPlayerNumber,
    isRemote: selectors.getIsRemote,
    winner: selectors.getWinner,
    playersOnline: selectors.getPlayersOnline,
    isLogged : login.selectors.getIsLogged
});

const mapDispatchToProps = (dispatch) => {
    return {
        fireWeapon: (type) => dispatch(actions.fireWeapon(type)),
        changeMode: () => dispatch(actions.changeMode()),
        fireWeaponRemote: (type) => dispatch(api.serverFireWeaponRemote(type)),
        redirect: (url) => dispatch(push(url)),
        logout : () => dispatch(login.actions.logout())
    };
};

Container.propTypes = {
    mode: PropTypes.number,

    answerPlayer: PropTypes.string,

    answerComputer: PropTypes.string,

    scorePlayer: PropTypes.number,

    scoreComputer: PropTypes.number,

    fireWeapon: PropTypes.string,

    fireWeaponRemote: PropTypes.string,

    waitingResponse: PropTypes.bool,

    changeMode: PropTypes.func,

    isRemote: PropTypes.bool,

    playerNumber: PropTypes.number,

    answerPlayerTwo: PropTypes.string,

    scorePlayerTwo: PropTypes.number,

    winner: PropTypes.string,

    playerName: PropTypes.string,

    canPlayOnline: PropTypes.bool,

    playersOnline: PropTypes.number
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
