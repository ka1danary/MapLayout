import React from 'react';
import classesIcon from './Icons.module.sass'

const Menu = () => {
    return (
        <div>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path className={classesIcon.Path} d="M0 20V18.3333H20V20H0ZM0 10.8333V9.16667H20V10.8333H0ZM0 1.66667V0H20V1.66667H0Z" fill="#939393" />
                </svg>
            </button>
        </div>
    );
};

export default Menu;