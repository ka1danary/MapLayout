import React, { useState } from 'react';
import MyInput from '../UI/Input/MyInput.jsx';
import SearchIIcon from '../UI/Icon/SearchIIcon';
import Delete from '../UI/Icon/Delete';
import serchModule from './MySearch.module.sass'


const MySearch = (props) => {

    const [stateInput, setStateInput] = useState('')

    return (

        <div {...props} className={serchModule.boxContainer} >
            <MyInput 
                placeholder='Найти фильтр'
                title='Поиск'
                className={serchModule.searchInput}
                value={stateInput}
                onChange={ e => setStateInput(e.target.value)}
            />
            <div className={serchModule.boxRightContainer}>
                <SearchIIcon className={serchModule.searchButton} title='Искать'/>
                <Delete className={serchModule.searchButton} title='Очистить' onClick={() => setStateInput('')}/>
            </div>
        </div>
    );
};

export default MySearch;