import React, { useState } from 'react';
import './App.scss';
//import ShopHeader from './components/ShopHeader';
import NotesList from './components/NotesList';

function App() {
  const [items, setItems] = useState([]);

  return (
    <>
      
      <div className='todo-app'>
      {/* <ShopHeader /> */}
      <NotesList items={items} setItems={setItems} />
      </div>
    </>
  );
}

export default App;
