import React from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import './Prediction.css';

export default function Prediction( { className, probability, onClick }) {

    return (
        <OverlayTrigger
            placement='bottom'
            overlay={
                <Tooltip id={`tooltip-${className}`}>
                    Вероятностость <strong>{probability}</strong>.
                </Tooltip>
            }>

            <Button className='kanji-button' onClick={onClick}>{className}</Button>
        </OverlayTrigger>
        /*  <div>
             <button onClick={() => props.onClick()}>{className}</button>
             <p>{probability}</p>
         </div> */
    );
}