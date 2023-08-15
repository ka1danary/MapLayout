import React from 'react';

import MyInput from '../UI/Input/MyInput.jsx';
import SearchIIcon from '../UI/Icon/SearchIIcon';
import Delete from '../UI/Icon/Delete';

import serchModule from './MySearch.module.sass'

const MySearch = () => {

    
    return (
        <div className={serchModule.boxContainer}>
            <MyInput 
                placeholder='Найти фильтр'
            />
            <div className={serchModule.boxLeftContainer}>
                <SearchIIcon className={serchModule.searchButton}/>
                <Delete className={serchModule.searchButton}/>
            </div>
        </div>
    );
};

export default MySearch;