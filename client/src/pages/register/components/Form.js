import React from 'react';
import { css } from 'glamor';
import { InputText, Button } from '../../common/components';

const Form = ({redirect, changeField, formValues, registerUser, formErrors}) => {
    return (
        <div className="row justify-content-center">
            <div className="col-10 col-md-6">
                <div className={`${styles.form}`}>
                    <div className={styles.info}> Sign up to play with someone else :D </div>
                    <form>
                        <div className="row">
                            <div className="col-12">
                                <InputText 
                                    placeholder='Nickname'
                                    handleChange = {(e) => changeField('nickname', e.target.value)}
                                    value = {formValues.nickname}
                                    error = {formErrors.nickname}
                                />
                            </div>
                            <div className="col-12">
                                <InputText 
                                    placeholder='Password'
                                    type={'password'}
                                    handleChange = {(e) => changeField('password', e.target.value)}
                                    value = {formValues.password}
                                    error = {formErrors.password}
                                />
                            </div>
                            <div className="col-12">
                                <InputText 
                                    placeholder='Write your password again' 
                                    type={'password'}
                                    handleChange = {(e) => changeField('confirmPassword', e.target.value)}
                                    value = {formValues.confirmPassword}
                                    error = {formErrors.confirmPassword}
                                />
                            </div>
                            <div className="col-12">
                                <Button text="Sign in" onClick={registerUser}/>
                            </div>
                        </div>
                    </form>

                    <div className={(styles.label, styles.link)} onClick={() => redirect('/login')}> 
                        Come back to login
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    form: css({
        backgroundColor: '#3D9970',
        marginTop: 20,
        padding: 20
    }),
    label: css({
        margin: 10,
        fontSize: 20
    }),
    link: css({
        marginTop: 20,
        fontSize: 20,
        '&:hover' : {
            color: "#01FF70",
            cursor: "pointer"
        }
    }),
    info: css({
        color: "#fff",
        fontSize: 25,
        marginBottom: 20,
    })
}

export default Form;