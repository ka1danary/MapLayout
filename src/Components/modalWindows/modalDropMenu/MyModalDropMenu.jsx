import React from 'react';

import modalMenu from './MyModalDropMenu.module.sass'
import Ruler from '../../UI/buttons/Ruler';
import TimeLine from '../../UI/buttons/TimeLine';

const MyModalmenu = ({ children, visible, setVisible, filter }) => {

    const rootClasses = [modalMenu.myModalMenu]

    if (visible) {
        rootClasses.push(modalMenu.active)
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div className={modalMenu.contentModal}>
                <div className={modalMenu.toolsContent}>
                    <div className={modalMenu.tools}>
                        <h1>Инструменты</h1>
                        <Ruler />
                        <TimeLine />
                    </div>
                </div>
                <h1 className={modalMenu.titleMenu}>
                    {children}
                </h1>
                <div className={modalMenu.filtersListContent}>
                    <div className={modalMenu.filtersList}>
                        {filter.map(el =>
                            <div className={modalMenu.filtersListItem}>{el.title}</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyModalmenu;