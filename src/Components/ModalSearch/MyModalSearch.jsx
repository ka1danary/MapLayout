import React from 'react';
import modalClasses from './MyModalSearch.module.sass'

const MyModalSearch = ({children, visible, setVisible}) => {

    const rootClasses = [modalClasses.myModal]

    if(visible) {
        rootClasses.push(modalClasses.active)
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div className={modalClasses.myModalContent} onClick={(e) => e.stopPropagation()}>
            {children}
            </div>
        </div>
    );
};

export default MyModalSearch;