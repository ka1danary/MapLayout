import React from 'react';
import classesHeader from './Header.module.sass'
import Menu from '../UI/Icon/Menu';
import Tools from '../UI/Icon/Tools';
import Layers from '../UI/Icon/Layers';
import Split from '../UI/Icon/Split';
import Settings from '../UI/Icon/Settings';
import GitHub from '../UI/Icon/GitHub';
import Lighttheme from '../UI/Icon/Lighttheme';
import MySearch from '../Search/MySearch';


const Header = () => {
    console.log(classesHeader)
    return (
        <div className={classesHeader.HeaderBox}>
            <div className={classesHeader.headerLeftBox}>
                <Menu className={classesHeader.menuButton} /> 
                <MySearch/>
                <Tools className={classesHeader.toolsButton} />
                <Layers className={classesHeader.layersButton} />
            </div>
            <div className={classesHeader.headerRightBox}>
                <Split className={classesHeader.splitButton} />
                <div class={classesHeader.dropDown}>
                    <Settings className={classesHeader.dropButton} />
                    <div class={classesHeader.dropdownContent}>
                        <Lighttheme />
                        <GitHub />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;