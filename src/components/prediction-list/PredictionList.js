import React from 'react';
import Prediction from '../prediction/Prediction';


export default function PredictionList({ predictions, onKanjiFound }) {
    return (
        <div id='prediction-list'>
            {predictions.map((pred) =>
                <Prediction
                    key={pred.className}
                    className={pred.className}
                    probability={pred.probability}
                    onClick={() => handlePredictionClick(pred)}
                />
            )}
        </div>
    );

    function handlePredictionClick(pred) {
        console.log(pred);

        fetch('https://sergio-kanji-dictionary.herokuapp.com/kanji?kanjiSymbol=' + pred.className)
        .then(response => response.json() )
        .then(foundKanji => onKanjiFound(foundKanji));
    }
}