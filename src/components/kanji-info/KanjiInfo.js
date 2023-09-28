import React from 'react';

import './KanjiInfo.css';

export default function KanjiInfo({ kanji }) {

    const isKanjiPresent = kanji !== '';

    return (
        <div id='kanji-info' className='d-flex justify-content-center'>
            {isKanjiPresent ?
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{kanji.symbol}</h5>
                        <h6 className="card-subtitle">{kanji.yomi}</h6>

                        {getOnYomi(kanji)}
                        {getKunYomi(kanji)}
                    </div>
                </div> : <></>
            }

        </div>
    );

    function getOnYomi(kanji) {
        if (kanji.onYomiEng.trim() !== '-') {
            return  <p className="card-text"><b>{kanji.onYomiEng}</b> - {kanji.onYomiTranslationRus}</p>
        }
        return <></>
    }

    function getKunYomi(kanji) {
        if (kanji.kunYomiEng.trim() !== '-') {
            return  <p className="card-text"><b>{kanji.kunYomiEng}</b> - {kanji.kunYomiTranslationRus}</p>
        }
        return <></>
    }

}