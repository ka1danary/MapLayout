import React from 'react';
import { useState } from 'react';
import checkboxClasses from './MyCheckbox.module.sass'

const MyCheckbox = ({value, setValue, ...props}) => {

    return (
        
        <input {...props} type='checkbox' 
            className={checkboxClasses.myCheck} 
            value={value}
            onChange={ e => setValue(e.target.value)}
            />
    );
};

export default MyCheckbox;