import React from 'react';
import classesIcon from './Icons.module.sass'

const Menu = (props) => {
    return (
        <div {...props}>
            <button className={classesIcon.btn}>
                <svg className={classesIcon.svgIcon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path className={classesIcon.Path} d="M0 20V18.3333H20V20H0ZM0 10.8333V9.16667H20V10.8333H0ZM0 1.66667V0H20V1.66667H0Z"/>
                </svg>
            </button>
        </div>
    );
};

export default Menu;