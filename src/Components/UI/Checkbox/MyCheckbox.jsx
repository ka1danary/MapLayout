import React from 'react';
import checkboxClasses from './MyCheckbox.module.sass'

const MyCheckbox = (props) => {
    return (
        <input {...props} type='radio' className={checkboxClasses.myCheck}/>
    );
};

export default MyCheckbox;