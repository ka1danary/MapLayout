import React from 'react';

import modalTools from './MyModalTools.module.sass'

const MyModalTools = ({children, visible, setVisible,...props}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default MyModalTools;