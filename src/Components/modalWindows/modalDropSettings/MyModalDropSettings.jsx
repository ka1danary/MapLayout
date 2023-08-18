import React from 'react';

import settingsClasses from './MyModalDropSettings.module.sass'

import Lighttheme from '../../UI/buttons/Lighttheme';
import GitHub from '../../UI/buttons/GitHub';

const SettingsDropMenu = ({ children, visible, setisible }) => {

    const rootClasses = [settingsClasses.myStng]

    if (visible) {
        rootClasses.push(settingsClasses.active)
    }

    return (
        
            <div className={settingsClasses.BoxSettings}>
                <div className={rootClasses.join(' ')}>
                    <div className={settingsClasses.settingsContent}>
                        <Lighttheme />
                        <GitHub />
                    </div>
                </div>
            </div>
            
    );
};

export default SettingsDropMenu;