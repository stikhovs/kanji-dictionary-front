import React from 'react';
import Dictionary from './components/dictionary/Dictionary';

function App() {
  return (
    <div className='container-fluid'>
      <h1 id='title' className='text-center'>Kanji dictionary</h1>
      <Dictionary/>
    </div>
  );
}

export default App;
