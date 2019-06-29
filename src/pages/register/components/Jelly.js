import React from 'react';
import { Header } from '../../common/components';
import { Form } from './index';
const Jelly = ({redirect, changeField, formValues, registerUser, formErrors}) => {
        return (
            <div className="jelly-container">
              <Header />
              <br/><br/><br/><br/><br/><br/>
              <div className="bubble-1" />
              <div className="bubble-2" />
              <div className="bubble-3" />
              <div className="bubble-4" />
              <div className="bubble-5" />
              <div className="bubble-6" />
              <div className="bubble-7" />
              <div className="bubble-8" />
              <div className="bubble-9" />
              <div className="bubble-10" />
              <div className="jelly-wrapper">
                <div className="jelly-hair" />
                <div className="jelly-body">
                  <div className="jelly-inner">
                    <div className="jelly-eyes" />
                    <div className="jelly-mouth" />
                    <div className="jelly-hands" />
                  </div>
                </div>
                <div className="jelly-tentacle-1" />
                <div className="jelly-tentacle-2" />
                <div className="jelly-tentacle-3" />
                <div className="jelly-tentacle-4" />
                <div className="jelly-tentacle-5" />
              </div>
              <div className="jelly-shadow" />
              <div className="bubble-11" />
              <div className="bubble-12" />
              <div className="bubble-13" />
              <div className="bubble-14" />
              <div className="bubble-15" />
              <div className="bubble-16" />
              <div className="bubble-17" />
              <div className="bubble-18" />
              <div className="bubble-19" />
              <div className="bubble-20" />
              <Form redirect = {redirect}
                        changeField = {changeField}
                        formValues = {formValues}
                        registerUser = {registerUser}
                        formErrors = {formErrors} />
               <br/><br/><br/><br/><br/><br/><br/>         
            </div>
          );
};
export default Jelly;
