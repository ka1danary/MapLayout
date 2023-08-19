import React from 'react';

import moduleLayers from './MyDropLayers.module.sass'

const MyDropLayers = ({ visible, setVisible, children, ...props }) => {

    const rootClasses = [moduleLayers.myLayers]

    if (visible) {
        rootClasses.push(moduleLayers.active)
    }
    
    return (
        <div className={rootClasses.join(' ')} {...props}>
            <div className={moduleLayers.contentLayers}>
                {children}
            </div>
        </div>
    );
};

export default MyDropLayers;