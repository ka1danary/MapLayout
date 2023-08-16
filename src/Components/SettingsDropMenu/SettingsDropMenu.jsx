import React from 'react';
import Lighttheme from '../UI/Icon/Lighttheme';
import GitHub from '../UI/Icon/GitHub';

import settingsClasses from './SettingsDropMenu.module.sass'

const SettingsDropMenu = ({children ,visible, setisible}) => {

    const rootClasses = [settingsClasses.myStng]

    if(visible) {
        rootClasses.push(settingsClasses.active)
    }
    return (
        <div className={rootClasses.join(' ')}>
            <Lighttheme/>
            <GitHub/>
        </div>
    );
};

export default SettingsDropMenu;