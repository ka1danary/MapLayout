import React from 'react';
import classesHeader from './Header.module.sass'

import Menu from '../UI/Icon/Menu';
import Search from '../UI/Search/Search.jsx';
import Tools from '../UI/Icon/Tools';
import Layers from '../UI/Icon/Layers';
import Split from '../UI/Icon/Split';
import Settings from '../UI/Icon/Settings';
import GitHub from '../UI/Icon/GitHub';
import Lighttheme from '../UI/Icon/Lighttheme';


const Header = () => {
    console.log(classesHeader)
    return (
        <div className={classesHeader.HeaderBox}>
            <div className={classesHeader.headerLeftBox}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path d="M11.9018 25C10.2435 24.9166 8.69018 24.5307 7.24181 23.8423C5.79345 23.1539 4.534 22.2518 3.46348 21.1358C2.39295 20.0198 1.54807 18.7237 0.928841 17.2475C0.309614 15.7713 0 14.1941 0 12.5156C0 10.7843 0.330605 9.15728 0.991814 7.63454C1.65302 6.11181 2.55038 4.78723 3.68388 3.66083C4.81738 2.53442 6.15029 1.64268 7.68262 0.985607C9.21494 0.328536 10.8522 0 12.5945 0C15.7221 0 18.4404 0.980392 20.7494 2.94118C23.0584 4.90196 24.4752 7.36337 25 10.3254H23.0793C22.7225 8.57322 21.9773 7.00876 20.8438 5.63204C19.7103 4.25532 18.2935 3.22278 16.5932 2.53442V3.09762C16.5932 3.8277 16.3413 4.46391 15.8375 5.00626C15.3338 5.5486 14.7145 5.81977 13.9798 5.81977H11.2406V8.54193C11.2406 8.88767 11.0989 9.17748 10.8155 9.41136C10.5321 9.64525 10.212 9.7622 9.85516 9.7622H7.24181V12.5156H10.7053V16.4268H8.59572L2.17254 10.0438C2.06759 10.461 1.99412 10.8747 1.95214 11.2849C1.91016 11.6952 1.88917 12.1054 1.88917 12.5156C1.88917 15.3317 2.84425 17.7618 4.75441 19.806C6.66457 21.8502 9.04702 22.9558 11.9018 23.1227V25ZM20.0252 19.9937C19.5844 20.3066 19.1068 20.5465 18.5926 20.7134C18.0783 20.8803 17.5528 20.9637 17.0162 20.9637C15.5256 20.9637 14.2585 20.4462 13.215 19.4112C12.1716 18.3762 11.6499 17.1194 11.6499 15.6409C11.6499 14.1623 12.1706 12.9068 13.2122 11.8742C14.2537 10.8417 15.5183 10.3254 17.0062 10.3254C18.4941 10.3254 19.7576 10.8439 20.7966 11.8808C21.8356 12.9177 22.3552 14.1768 22.3552 15.6582C22.3552 16.1914 22.266 16.7136 22.0875 17.2247C21.9091 17.7357 21.673 18.2207 21.3791 18.6796L20.8438 19.4112L20.0252 19.9937ZM16.9981 19.0864C17.9666 19.0864 18.7867 18.7541 19.4584 18.0895C20.1301 17.425 20.466 16.6114 20.466 15.649C20.466 14.6865 20.1316 13.8715 19.4629 13.204C18.7941 12.5365 17.9755 12.2028 17.007 12.2028C16.0384 12.2028 15.2183 12.535 14.5466 13.1996C13.8749 13.8642 13.539 14.6777 13.539 15.6401C13.539 16.6026 13.8734 17.4176 14.5422 18.0851C15.2109 18.7526 16.0295 19.0864 16.9981 19.0864Z" fill="#D9D9D9" />
                    <path d="M16.9624 15.406C16.9624 15.406 14.5 17.5 19.9997 12.9997" stroke="#D9D9D9" />
                </svg>
                <Menu className={classesHeader.menuButton} />
                <Search className={classesHeader.SearchBlock} />
                <Tools className={classesHeader.toolsButton} />
                <Layers className={classesHeader.layersButton} />
            </div>
            <div className={classesHeader.headerRightBox}>
                <Split className={classesHeader.splitButton} />
                <div class={classesHeader.dropDown}>
                    <Settings className={classesHeader.dropButton} />
                    <div class={classesHeader.dropdownContent}>
                        <Lighttheme />
                        <GitHub />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;