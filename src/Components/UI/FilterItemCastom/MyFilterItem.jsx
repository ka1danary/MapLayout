import React from 'react';
import { useState } from 'react';
import moduleFilteritem from './MyFilterItem.module.sass'
//import MyCheckbox from '../Checkbox/MyCheckbox';

const MyFilterItem = ({children, ...props}) => {

    const [check, setCheck] = useState(false)

    return (
        <div {...props} className={moduleFilteritem.boxFilter}>
            <div className={moduleFilteritem.mainContentCheck}>
                <label
                    value={check}
                    disabled={false}
                    className={moduleFilteritem.checkbox}
                >
                <input 
                type='checkbox'
                value={check} 
                onChange={e => setCheck(e.target.value)}
                className={moduleFilteritem.checkbox}
                />
                    <div className={moduleFilteritem.checkBoxText}>{children}</div>
                </label>
            </div>
        </div>
    );
};

export default MyFilterItem;