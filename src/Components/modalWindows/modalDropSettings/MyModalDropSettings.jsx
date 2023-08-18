import React from 'react';
import {
    CSSTransition,
    TransitionGroup
} from 'react-transition-group';

import settingsClasses from './MyModalDropSettings.module.sass'

import Lighttheme from '../../UI/buttons/Lighttheme';
import GitHub from '../../UI/buttons/GitHub';

const SettingsDropMenu = ({ children, visible, setisible }) => {

    const rootClasses = [settingsClasses.myStng]

    if (visible) {
        rootClasses.push(settingsClasses.active)
    }

    return (
        <TransitionGroup>
            <CSSTransition
                key={Date.now()}
                timeout={500}
                classNames={settingsClasses.menu}
            >
            <div className={settingsClasses.BoxSettings}>
                <div className={rootClasses.join(' ')}>
                    <div className={settingsClasses.settingsContent}>
                        <Lighttheme />
                        <GitHub />
                    </div>
                </div>
            </div>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default SettingsDropMenu;