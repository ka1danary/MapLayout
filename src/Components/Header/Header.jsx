import React from 'react';
import classesHeader from './Header.module.sass'

import Menu from '../UI/Icon/Menu';
import Search from '../UI/Search/Search.jsx';
import Tools from '../UI/Icon/Tools';
import Layers from '../UI/Icon/Layers';
import Split from '../UI/Icon/Split';
import Settings from '../UI/Icon/Settings';


const Header = () => {
    return (
        <div className={classesHeader.HeaderBox}>
            <div className={classesHeader.headerLeftBox}>
                <Menu className={classesHeader.menuButton} />
                <Search className={classesHeader.SearchBlock} />
                <Tools className={classesHeader.toolsButton} />
                <Layers className={classesHeader.layersButton} />
            </div>
            <div className={classesHeader.headerRightBox}>
                <Split className={classesHeader.splitButton} />
                <Settings className={classesHeader.settingsButton} />
            </div>
        </div>
    );
};

export default Header;