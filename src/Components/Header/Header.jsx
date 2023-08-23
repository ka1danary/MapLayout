import React from 'react';
import { useState } from 'react';

import classesHeader from './Header.module.sass'

import Menu from '../UI/buttons/Menu';
import Layers from '../UI/buttons/Layers';
import Split from '../UI/buttons/Split';
import Settings from '../UI/buttons/Settings';
import MySearch from '../search/MySearch';
import MyModalmenu from '../modalWindows/modalDropMenu/MyModalDropMenu';
import SettingsDropMenu from '../modalWindows/modalDropSettings/MyModalDropSettings';

const Header = ({ filter, setFilter }) => {

    const [modal, setModal] = useState({ menu: false, settings: false})

    const openMenu = () => {
        modal.menu ?
            setModal({ ...modal, menu: false })
            : setModal({ ...modal, menu: true })
    }

    const openSettings = () => {
        modal.settings 
            ? setModal({ ...modal, settings: false })
            : setModal({ ...modal, settings: true })
    }

    return (
        <div className={classesHeader.headerMain}>
            <div className={classesHeader.HeaderBox}>
                <div className={classesHeader.headerLeftBox}>
                    <Menu 
                        className={classesHeader.menuButton} 
                        onClick={openMenu} title='Меню' 
                    />
                    <MySearch
                        filter={filter}
                    />
                </div>
                <div className={classesHeader.headerRightBox}>
                    <Layers 
                        className={classesHeader.layersButton} 
                        title='Слои' 
                    />
                    <Split 
                        className={classesHeader.splitButton} 
                        title='Разделить' 
                    />
                    <Settings 
                        className={classesHeader.dropButton} 
                        title='Настройки' 
                        onClick={openSettings} 
                    />
                </div>
            </div>
            <div className={classesHeader.headerOutline}>
                <MyModalmenu
                    visible={modal.menu}
                    setVisible={setModal}
                    filter={filter}>
                    <div>Доступные фильтры</div>
                </MyModalmenu>
                <SettingsDropMenu
                    visible={modal.settings}
                    setVisible={setModal}>
                </SettingsDropMenu>
            </div>
        </div>
    );
};

export default Header;