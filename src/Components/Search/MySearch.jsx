import React, { useState } from 'react';

import serchModule from './MySearch.module.sass'

import MyInput from '../UI/inputs/MyInput.jsx';
import SearchIIcon from '../UI/buttons/SearchIIcon';
import Delete from '../UI/buttons/Delete';
import MyModalSearch from '../modalWindows/modalDropSearch/MyModalDropSearch';

const MySearch = ({open, deleteF, ...props}) => {

    const [stateInput, setStateInput] = useState('')

    const deleteFuction = () => {
        setStateInput('')
        deleteF()
    }

    return (
        <div>
            <div {...props} className={serchModule.boxContainer} >
            <MyInput 
                placeholder='Найти фильтр'
                title='Поиск'
                className={serchModule.searchInput}
                value={stateInput}
                onChange={ e => setStateInput(e.target.value)}
                onClick={open}
            />
            <div className={serchModule.boxRightContainer}>
                <SearchIIcon className={serchModule.searchButton} title='Искать'/>
                <Delete className={serchModule.searchButton} 
                title='Очистить' 
                onClick={deleteFuction}
                />
            </div>
            <div>
                
                 
            </div>
        </div>

        </div>
        
    );
};

export default MySearch;