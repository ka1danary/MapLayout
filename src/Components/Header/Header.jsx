import React from 'react';
import { useState } from 'react';
import classesHeader from './Header.module.sass'
import Menu from '../UI/Icon/Menu';
import Tools from '../UI/Icon/Tools';
import Layers from '../UI/Icon/Layers';
import Split from '../UI/Icon/Split';
import Settings from '../UI/Icon/Settings';
import GitHub from '../UI/Icon/GitHub';
import Lighttheme from '../UI/Icon/Lighttheme';
import MySearch from '../Search/MySearch';
import MyModalSearch from '../ModalSearch/MyModalSearch';
import MyInput from '../UI/Input/MyInput';
import MyModalmenu from '../MyModalMenu/MyModalmenu';
import SettingsDropMenu from '../SettingsDropMenu/SettingsDropMenu';


const Header = ({ filter, setFilter }) => {

    const [modal, setModal] = useState({ menu: false, search: false, settings: false })

    const openMenu = () => {
        modal.menu ?
            setModal({ ...modal, menu: false })
            : setModal({ ...modal, menu: true })
    }

    const openSettings = () => {
        modal.settings ?
            setModal({ ...modal, settings: false })
            : setModal({ ...modal, settings: true })
    }

    return (
        <div className={classesHeader.headerMain}>

            <div className={classesHeader.HeaderBox}>

                <div className={classesHeader.headerLeftBox}>
                    <Menu className={classesHeader.menuButton} onClick={openMenu} title='Меню' />
                    <MySearch />
                </div>

                <div className={classesHeader.headerRightBox}>
                    <Layers className={classesHeader.layersButton} title='Слои' />
                    <Tools className={classesHeader.toolsButton} title='Инструменты' />
                    <Split className={classesHeader.splitButton} title='Разделить' />

                    <Settings className={classesHeader.dropButton} title='Настройки' onClick={openSettings} />
                    
                </div>
            </div>

            <div className={classesHeader.headerOutline}>
                <MyModalmenu
                    visible={modal.menu}
                    setVisible={setModal}
                    filter={filter}
                >
                    <h1>Доступные фильтры</h1>
                </MyModalmenu>
                <SettingsDropMenu
                    visible={modal.settings}
                    setVisible={setModal}
                ></SettingsDropMenu>
            </div>
        </div>

    );
};

export default Header;