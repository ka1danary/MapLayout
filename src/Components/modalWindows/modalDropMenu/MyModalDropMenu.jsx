import React from 'react';

import modalMenu from './MyModalDropMenu.module.sass'

const MyModalmenu = ({ children, visible, setVisible, filter }) => {

    const rootClasses = [modalMenu.myModalMenu]

    if (visible) {
        rootClasses.push(modalMenu.active)
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div
                className={modalMenu.contentModal}
                onClick={(e) => e.stopPropagation()}>
                    <h1 className={modalMenu.titleMenu}>
                    {children}
                    </h1>
                
                <div className={modalMenu.filtersList}>
                    {filter.map(el =>
                        <div className={modalMenu.filtersListItem}>{el.title}</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyModalmenu;