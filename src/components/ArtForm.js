import React from 'react';

const ArtForm = (props) => {
    return (
        <div>
            <form name="registerForm" id="registerForm" onSubmit={props.artSubmit}>
                <label name="title">Title: </label>
                <input name="title" />
                <label name="url" >Url: </label>
                <input name="url" />

                <button type="submit">Register</button>
            
            </form>
        </div>
    );
};

export default ArtForm;