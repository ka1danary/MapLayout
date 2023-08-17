import React from 'react';
import classesIcon from './Icons.module.sass'

const Layers = (props) => {
    return (
        <button {...props} className={classesIcon.btn}>
            <svg className={classesIcon.svgIcon} xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="currentColor">
                <path className={classesIcon.Path} d="M13.5 27L0 16.382L1.875 14.9789L13.5 24.118L25.125 14.9789L27 16.382L13.5 27ZM13.5 21.236L0 10.618L13.5 0L27 10.618L13.5 21.236ZM13.5 18.3539L23.325 10.618L13.5 2.88202L3.675 10.618L13.5 18.3539Z"  />
            </svg>
        </button>
    );
};

export default Layers;