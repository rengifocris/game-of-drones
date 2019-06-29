import React, { Component } from 'react';
import { Header } from '../common/components';
import { Form } from './components';
import { push } from 'connected-react-router';
import { Jelly } from './components';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import actions from './actions';
import * as selectors from './selectors';

class Container extends Component{
    render () {

        const { redirect, changeField, formValues, formErrors, registerUser } = this.props;
        return (
            <div className="row h-100 align-items-center justify-content-center text-center">
                <div className="col">
                     <Jelly 
                        redirect = {redirect}
                        changeField = {changeField}
                        formValues = {formValues}
                        registerUser = {registerUser}
                        formErrors = {formErrors}
                    />
                </div>
            </div>
        )
    } 
}


const mapStateToProps = createStructuredSelector({
    formValues : selectors.getFormValues,
    formErrors: selectors.getErrors
});

const mapDispatchToProps = (dispatch) => {
    return {
       redirect : (url) => dispatch(push(url)),
       changeField : (field, value) => dispatch(actions.onChangeField(field, value)),
       registerUser : () => dispatch(actions.registerUser())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
