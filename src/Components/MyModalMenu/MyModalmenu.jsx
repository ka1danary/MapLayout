import React from 'react';
import modalMenu from './MyModal.module.sass'
import Delete from '../UI/Icon/Delete';

const MyModalmenu = ({ children, visible, setVisible, filter}) => {

    const rootClasses = [modalMenu.myModalMenu]

    if(visible) {
        rootClasses.push(modalMenu.active)
    }
    return (
        <div className={rootClasses.join(' ')}>
            <div className={modalMenu.contentModal}>
                <Delete/>
                {children}
                {filter.map( el => 
                    <div>{el.id}. {el.title}</div>
                    )}
            </div>
        </div>
    );
};

export default MyModalmenu;