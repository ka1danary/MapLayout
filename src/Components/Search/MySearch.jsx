import React, { useState } from 'react';
import MyInput from '../UI/Input/MyInput.jsx';
import SearchIIcon from '../UI/Icon/SearchIIcon';
import Delete from '../UI/Icon/Delete';
import serchModule from './MySearch.module.sass'


const MySearch = (props) => {

    return (

        <div {...props} className={serchModule.boxContainer} >
            <MyInput 
                placeholder='Найти фильтр'
                title='Поиск'
            />
            <div className={serchModule.boxRightContainer}>
                <SearchIIcon className={serchModule.searchButton} title='Искать'/>
                <Delete className={serchModule.searchButton} title='Очистить'/>
            </div>
        </div>
    );
};

export default MySearch;