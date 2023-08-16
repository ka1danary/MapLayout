import '../src/Components/reset.css'
import '../src/Components/App.sass'

import Header from './Components/Header/Header';
import { useState } from 'react';


function App() {

  const [filter, setFilter] = useState([
    {id : 1, title : 'Filter 1', body : 'Descroption'},
    {id : 2, title : 'Filter 2', body : 'Descroption'},
    {id : 3, title : 'Filter 3', body : 'Descroption'},
  ])
  return (
    <div className="App">
      <Header/>
      
    </div>
  );
}

export default App;
