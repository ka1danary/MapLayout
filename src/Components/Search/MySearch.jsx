import React, { useState } from 'react';

import serchModule from './MySearch.module.sass'

import MyInput from '../UI/inputs/MyInput.jsx';
import SearchIIcon from '../UI/buttons/SearchIIcon';
import Delete from '../UI/buttons/Delete';
import MyModalSearch from '../modalWindows/modalDropSearch/MyModalDropSearch';

const MySearch = ({ filter, ...props }) => {

    const [stateSearch, setStateSearch] = useState({ state: '', drop: false })

    const openAndCloseSearch = () => {
        setStateSearch({ ...stateSearch, drop: !(stateSearch.drop) })
    }


    return (
        <div>
            <div {...props} className={serchModule.boxContainer} >
                <MyInput
                    placeholder='Найти фильтр'
                    title='Поиск'
                    className={serchModule.searchInput}
                    value={stateSearch.state}
                    onChange={e => setStateSearch({ ...stateSearch, state: e.target.value })}
                    onClick={openAndCloseSearch}
                />
                <div className={serchModule.boxRightContainer}>
                    <SearchIIcon className={serchModule.searchButton} title='Искать' />
                    <Delete className={serchModule.searchButton}
                        title='Очистить'
                        onClick={() => setStateSearch({ state: '', drop: false })}
                    />
                </div>
                <div className={serchModule.outline}>
                    <MyModalSearch
                        visible={stateSearch.drop}
                        filter={filter} />
                </div>
            </div>
        </div>
    );
};

export default MySearch;