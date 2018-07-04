import React from 'react';

const RegisterForm = (props) => {
    return (
        <div>
            <form name="registerForm" id="registerForm" onSubmit={props.handleSubmit}>
                <label name="email">Email: </label>
                <input name="email" />
                <label name="password" >Passowrd: </label>
                <input name="password" />

                <button type="submit">{props.buttonName}</button>
            
            </form>
        </div>
    );
};

export default RegisterForm;