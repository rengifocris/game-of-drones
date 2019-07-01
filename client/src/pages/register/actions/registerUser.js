import { REGISTER_USER } from '../actionTypes';
import setErrors from './setErrors';
import * as selectors from '../selectors';
import {push} from 'connected-react-router';
import resetForm from './resetForm';

export default function () {
    return (dispatch, getState) => {
        const state = getState();
        const values = selectors.getFormValues(state);
        
        const errors = validateFields(values, state)
        if(!isEmptyObject(errors)){
            dispatch(setErrors(errors));
            return;
        }

        dispatch({
            type : REGISTER_USER,
            payload: {
                nickname : values.nickname, password: values.password
            }
        });

        dispatch(resetForm());
        dispatch(push('/login'));

    }
}

function isEmptyObject(obj){
    return Object.keys(obj).length === 0;
}

function validateFields(values, state){

    const errors = {};
    const users = selectors.getUsers(state);

    let existUser = users.find((user) => {
        return user.nickname === values.nickname;
    })

    if(!values.nickname){
        errors.nickname = 'The nickname is required.';
    }else if(existUser){
        errors.nickname = `The user ${values.nickname} already exist.`
    }

    if(!values.password){
        errors.password = 'The Password is required.';
    }

    if(!values.confirmPassword){
        errors.confirmPassword = ' Please type again your password :(.'
    }

    if(values.password !== values.confirmPassword){
        errors.confirmPassword = 'Your password and its confirmation must be the same.'
    }

    return errors;
}