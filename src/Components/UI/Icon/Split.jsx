import React from 'react';
import classesIcon from './Icons.module.sass'

const Split = () => {
    return (
        <div>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path className={classesIcon.Path} d="M0 11.4583V0H11.4583V11.4583H0ZM0 25V13.5417H11.4583V25H0ZM13.5417 11.4583V0H25V11.4583H13.5417ZM13.5417 25V13.5417H25V25H13.5417ZM2.08333 9.375H9.375V2.08333H2.08333V9.375ZM15.625 9.375H22.9167V2.08333H15.625V9.375ZM15.625 22.9167H22.9167V15.625H15.625V22.9167ZM2.08333 22.9167H9.375V15.625H2.08333V22.9167Z" fill="#939393" />
                </svg>
            </button>
        </div>
    );
};

export default Split;