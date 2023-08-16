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


const Header = () => {

    const [modal, setModal] = useState({menu : false, search  : false})
    
    return (
        <div className={classesHeader.headerMain}>
        
            <div className={classesHeader.HeaderBox}>

                <div className={classesHeader.headerLeftBox}>
                    <Menu className={classesHeader.menuButton} onClick={() => setModal({menu : true, search : false})} title='Меню' />
                    <MySearch/>
                </div>

                <div className={classesHeader.headerRightBox}>
                    <Layers className={classesHeader.layersButton} title='Слои' />
                    <Tools className={classesHeader.toolsButton} title='Инструменты' />
                    <Split className={classesHeader.splitButton} title='Разделить' />
                    <div class={classesHeader.dropDown}>
                        <Settings className={classesHeader.dropButton} title='Настройки' />
                        <div class={classesHeader.dropdownContent}>
                            <Lighttheme />
                            <GitHub />
                        </div>
                    </div>
                </div>
            </div>

            <div className={classesHeader.headerOutline}>
                
            <MyModalmenu
                visible={modal.menu}
                setVisible={setModal}>
                    <h1>Text</h1>
            </MyModalmenu>
            </div>
        </div>

    );
};

export default Header;