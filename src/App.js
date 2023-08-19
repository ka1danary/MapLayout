import { useState } from 'react';

import '../src/Components/reset.css'
import '../src/Components/App.sass'

import Header from './Components/header/Header.jsx';



function App() {

  const [filter, setFilter] = useState([
    { id: 1, title: 'Фильтр 1', body: 'Description' },
    { id: 2, title: 'Фильтр 2', body: 'Description' },
    { id: 3, title: 'Фильтр 3', body: 'Description' },
    { id: 4, title: 'Фильтр 4', body: 'Description' },
    
  ])

  return (
    <div className="App">
      <Header filter={filter} setFilter={setFilter} />
      
    </div>
  );
}

export default App;
