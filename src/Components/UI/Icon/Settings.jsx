import React from 'react';
import classesIcon from './Icons.module.sass'

const Settings = () => {
    return (
        <div>
            <button >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="currentColor">
                    <path className={classesIcon.Path} d="M9.625 25L9 21.0625C8.60417 20.9167 8.1875 20.7188 7.75 20.4688C7.3125 20.2188 6.92708 19.9583 6.59375 19.6875L2.90625 21.375L0 16.25L3.375 13.7812C3.33333 13.5938 3.30729 13.3802 3.29688 13.1406C3.28646 12.901 3.28125 12.6875 3.28125 12.5C3.28125 12.3125 3.28646 12.099 3.29688 11.8594C3.30729 11.6198 3.33333 11.4062 3.375 11.2188L0 8.75L2.90625 3.625L6.59375 5.3125C6.92708 5.04167 7.3125 4.78125 7.75 4.53125C8.1875 4.28125 8.60417 4.09375 9 3.96875L9.625 0H15.375L16 3.9375C16.3958 4.08333 16.8177 4.27604 17.2656 4.51562C17.7135 4.75521 18.0938 5.02083 18.4062 5.3125L22.0938 3.625L25 8.75L21.625 11.1562C21.6667 11.3646 21.6927 11.5885 21.7031 11.8281C21.7135 12.0677 21.7188 12.2917 21.7188 12.5C21.7188 12.7083 21.7135 12.9271 21.7031 13.1562C21.6927 13.3854 21.6667 13.6042 21.625 13.8125L25 16.25L22.0938 21.375L18.4062 19.6875C18.0729 19.9583 17.6927 20.224 17.2656 20.4844C16.8385 20.7448 16.4167 20.9375 16 21.0625L15.375 25H9.625ZM12.5 16.5625C13.625 16.5625 14.5833 16.1667 15.375 15.375C16.1667 14.5833 16.5625 13.625 16.5625 12.5C16.5625 11.375 16.1667 10.4167 15.375 9.625C14.5833 8.83333 13.625 8.4375 12.5 8.4375C11.375 8.4375 10.4167 8.83333 9.625 9.625C8.83333 10.4167 8.4375 11.375 8.4375 12.5C8.4375 13.625 8.83333 14.5833 9.625 15.375C10.4167 16.1667 11.375 16.5625 12.5 16.5625ZM12.5 14.6875C11.8958 14.6875 11.3802 14.474 10.9531 14.0469C10.526 13.6198 10.3125 13.1042 10.3125 12.5C10.3125 11.8958 10.526 11.3802 10.9531 10.9531C11.3802 10.526 11.8958 10.3125 12.5 10.3125C13.1042 10.3125 13.6198 10.526 14.0469 10.9531C14.474 11.3802 14.6875 11.8958 14.6875 12.5C14.6875 13.1042 14.474 13.6198 14.0469 14.0469C13.6198 14.474 13.1042 14.6875 12.5 14.6875ZM11.125 23.125H13.875L14.3125 19.625C15 19.4583 15.651 19.1979 16.2656 18.8438C16.8802 18.4896 17.4375 18.0625 17.9375 17.5625L21.25 19L22.5 16.75L19.5625 14.5938C19.6458 14.2396 19.7135 13.8906 19.7656 13.5469C19.8177 13.2031 19.8438 12.8542 19.8438 12.5C19.8438 12.1458 19.8229 11.7969 19.7812 11.4531C19.7396 11.1094 19.6667 10.7604 19.5625 10.4062L22.5 8.25L21.25 6L17.9375 7.4375C17.4583 6.89583 16.9167 6.44271 16.3125 6.07812C15.7083 5.71354 15.0417 5.47917 14.3125 5.375L13.875 1.875H11.125L10.6875 5.375C9.97917 5.52083 9.31771 5.77083 8.70312 6.125C8.08854 6.47917 7.54167 6.91667 7.0625 7.4375L3.75 6L2.5 8.25L5.4375 10.4062C5.35417 10.7604 5.28646 11.1094 5.23438 11.4531C5.18229 11.7969 5.15625 12.1458 5.15625 12.5C5.15625 12.8542 5.18229 13.2031 5.23438 13.5469C5.28646 13.8906 5.35417 14.2396 5.4375 14.5938L2.5 16.75L3.75 19L7.0625 17.5625C7.5625 18.0625 8.11979 18.4896 8.73438 18.8438C9.34896 19.1979 10 19.4583 10.6875 19.625L11.125 23.125Z"/>
                </svg>
            </button>
        </div>
    );
};

export default Settings;