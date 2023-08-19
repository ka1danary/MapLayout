import React from 'react';
import classesIcon from './Icons.module.sass'

const Ruler = (props) => {
    return (
        <div {...props}>
            <button className={classesIcon.ruler}>
                <svg className={classesIcon.Icon} xmlns="http://www.w3.org/2000/svg" width="19 " height="20" viewBox="0 0 27 27" fill="none">
                    <path className={classesIcon.Path} d="M3.24324 27C2.35135 27 1.58784 26.6866 0.952703 26.0597C0.317568 25.4328 0 24.6792 0 23.799V2.23195C0 1.24496 0.466216 0.564736 1.39865 0.191282C2.33108 -0.182173 3.16216 -0.00878337 3.89189 0.711451L5.71622 2.51204L4.01351 4.19258L5.10811 5.27293L6.81081 3.59239L11.5541 8.27391L9.85135 9.95446L10.9459 11.0348L12.6486 9.35426L17.4324 14.0758L15.7297 15.7563L16.8243 16.8367L18.527 15.1561L23.2703 19.8377L21.5676 21.5182L22.6622 22.5986L24.3649 20.918L26.1892 22.7186C27 23.5189 27.2027 24.4325 26.7973 25.4595C26.3919 26.4865 25.6486 27 24.5676 27H3.24324ZM3.24324 23.799H22.0135L3.24324 5.27293V23.799Z" fill="#8E8E8E" />
                </svg>
                <div className={classesIcon.textIcon}>Линейка</div>
            </button>
        </div>
    );
};

export default Ruler;