import { useState } from 'react';

import '../src/Components/reset.css'
import '../src/Components/App.sass'

import Header from './Components/header/Header';
import MyModalSearch from './Components/modalWindows/modalDropSearch/MyModalDropSearch';


function App() {

  const [filter, setFilter] = useState([
    { id: 1, title: 'Filter 1', body: 'Description' },
    { id: 2, title: 'Filter 2', body: 'Description' },
    { id: 3, title: 'Filter 3', body: 'Description' },
    { id: 1, title: 'Filter 4', body: 'Description' },
    { id: 2, title: 'Filter 5', body: 'Description' },
    { id: 3, title: 'Filter 6', body: 'Description' },
    { id: 1, title: 'Filter 7', body: 'Description' },
    { id: 2, title: 'Filter 8', body: 'Description' },
    { id: 3, title: 'Filter 9', body: 'Description' },
    { id: 1, title: 'Filter 10', body: 'Description' },
    { id: 2, title: 'Filter 11', body: 'Description' },
    { id: 3, title: 'Filter 12', body: 'Description' },
  ])

  return (
    <div className="App">
      <Header filter={filter} setFilter={setFilter} />
    
    </div>
  );
}

export default App;
