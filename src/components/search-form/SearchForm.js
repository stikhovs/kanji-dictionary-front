import React, { useState } from 'react';


export default function SearchForm({ onKanjiFound }) {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

    const [kanjiToSearch, setKanjiToSearch] = useState('');

    return (
        <div className="input-group mb-3">
            <input onInput={e => { setKanjiToSearch(e.target.value); console.log(kanjiToSearch); }} type="text" className='form-control' placeholder="Введите иероглиф для поиска" />
            <button className='btn btn-info' onClick={search}>Поиск</button>
        </div>
    );

    function search() {
        if (kanjiToSearch.trim() !== '' && kanjiToSearch.trim().length === 1) {
            console.log('kanjiToSearch ' + kanjiToSearch);
            fetch(`${BACKEND_URL}/kanji?kanjiSymbol=${kanjiToSearch}`)
                .then(response => response.json())
                .then(foundKanji => onKanjiFound(foundKanji));
        }
    }

}
