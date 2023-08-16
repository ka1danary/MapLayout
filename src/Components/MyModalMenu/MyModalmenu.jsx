import React from 'react';
import modalMenu from './MyModal.module.sass'

const MyModalmenu = ({ children, visible, setVisible }) => {

    const rootClasses = [modalMenu.myModalMenu]

    if(visible) {
        rootClasses.push(modalMenu.active)
    }
    return (
        <div className={rootClasses.join(' ')}>
            <div>
                {children}
            </div>
        </div>
    );
};

export default MyModalmenu;