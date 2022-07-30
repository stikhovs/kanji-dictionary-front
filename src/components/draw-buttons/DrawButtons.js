import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo, faTrash } from '@fortawesome/free-solid-svg-icons';

import './DrawButtons.css';

export default function DrawButtons({onSubmitButton, onUndoButton, onClearButton}) {
    
    return (
        <div id='draw-buttons-block'>
            <Button variant="success" className='draw-button' onClick={onSubmitButton}>Recognize</Button>
            <Button variant="primary" className='draw-button' onClick={onUndoButton}><FontAwesomeIcon icon={faUndo} /></Button>
            <Button variant="danger" className='draw-button' onClick={onClearButton}><FontAwesomeIcon icon={faTrash} /></Button>
        </div>
    );
}