import React from 'react';
import moduleFilteritem from './MyFilterItem.module.sass'
import MyCheckbox from '../Checkbox/MyCheckbox';

const MyFilterItem = ({children, ...props}) => {
    return (
        <div {...props} className={moduleFilteritem.boxFilter}>
            <div className={moduleFilteritem.mainContentCheck}>
                {children}
                
            </div>
            <MyCheckbox/>
        </div>
    );
};

export default MyFilterItem;