import React, { useState } from 'react';

import serchModule from './MySearch.module.sass'

import MyInput from '../UI/inputs/MyInput.jsx';
import SearchIIcon from '../UI/buttons/SearchIIcon';
import Delete from '../UI/buttons/Delete';

const MySearch = (props) => {

    const [stateInput, setStateInput] = useState('')

    return (
        <div>
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

        </div>
        
    );
};

export default MySearch;