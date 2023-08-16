import React from 'react';
import modalMenu from './MyModal.module.sass'

const MyModalmenu = ({ children, visible, setVisible, filter }) => {

    const rootClasses = [modalMenu.myModalMenu]

    if (visible) {
        rootClasses.push(modalMenu.active)
    }
    return (
        <div className={rootClasses.join(' ')}>
            <div className={modalMenu.contentModal} onClick={(e) => e.stopPropagation()}>
                {children}
                <div className={modalMenu.filtersList}>
                    {filter.map(el =>
                        <div>{el.id}. {el.title}</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyModalmenu;