import React from 'react';

import modalClasses from './MyModalDropSearch.module.sass'

const MyModalSearch = ({ children, visible, setVisible, filter }) => {

    const rootClasses = [modalClasses.myModal]

    if (visible) {
        rootClasses.push(modalClasses.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={(e => e.stopPropagation())}>
            <div
                className={modalClasses.myModalContent}
                >
                {children}
            </div>
            <div className={modalClasses.filterList}>
                    {filter.map(el =>
                        <div className={modalClasses.elementFilter}>{el.title}</div>
                    )}
                </div>
        </div>
    );
};

export default MyModalSearch;