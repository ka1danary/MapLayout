import React from 'react';
import myInputModule from './MyInput.module.sass'

const MyInput = (props) => {
    return (
        <input {...props} className={myInputModule.myInput}/>
    );
};

export default MyInput;