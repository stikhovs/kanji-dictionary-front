import React, { useState, useEffect } from 'react';
import SearchForm from '../search-form/SearchForm';
import DrawForm from '../draw-form/DrawForm';
import PredictionList from '../prediction-list/PredictionList';
import KanjiInfo from '../kanji-info/KanjiInfo';

import './Dictionary.css';


export default function Dictionary() {

    const [predictions, setPredictions] = useState([]);
    const [kanji, setKanji] = useState('');

    return (
        <div id='dictionary' className='d-flex flex-column align-items-center col-10 m-auto'>
            <div className='col-12 mt-3'>
                <SearchForm onKanjiFound={updateKanji} />
            </div>
            <div className='d-flex justify-content-center col-12'>
                <div className='col-5'>
                    <DrawForm onPredictionsChange={updatePredictions} />
                    <PredictionList predictions={predictions} onKanjiFound={updateKanji} />
                </div>
                <div className='col-7'>
                    <KanjiInfo kanji={kanji} />
                </div>
            </div>

        </div>
    );

    function updatePredictions(newPredictions) {
        setPredictions(newPredictions);
    }

    function updateKanji(newKanji) {
        setKanji(newKanji);
    }

}