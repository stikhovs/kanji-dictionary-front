import React, { useRef, useState, useEffect } from 'react';
import CanvasDraw from "react-canvas-draw";
import DrawButtons from '../draw-buttons/DrawButtons';

import './DrawForm.css';


export default function DrawForm({ onPredictionsChange }) {
    const canvasDrawRef = useRef();
    const [initialDraw, setInitialDraw] = useState('');
    const [currentDraw, setCurrentDraw] = useState('');

    useEffect(() => {
        setInitialDraw(getCurrentDraw());
    }, []);

    useEffect(() => {
        setCurrentDraw(getCurrentDraw());
    });

    return (
        <div id='draw-form-block'>
            <div id='canvas-draw-block'>
                <CanvasDraw
                    ref={canvasDrawRef}
                    className='kanjiDraw'
                    brushColor='#000000'
                    brushRadius={2}
                    hideGrid={true}
                    hideInterface={false}
                    lazyRadius={0}
                    canvasWidth={200}
                    canvasHeight={200} />
            </div>
            <DrawButtons
                onSubmitButton={handleSubmit}
                onUndoButton={handleUndo}
                onClearButton={handleClear} />
        </div>
    );

    function handleSubmit() {
        const kanjiImage = getCurrentDraw();
        if (currentDraw == kanjiImage || initialDraw == kanjiImage) {
            console.log("No changes or blank");
            return;
        }

        fetch('http://localhost:8080/recognize?size=20', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: kanjiImage
        })
            .then(response => response.json())
            .then(preds => {
                onPredictionsChange(preds);
            });
    }

    function handleUndo() {
        canvasDrawRef.current.undo();
    }


    function handleClear() {
        canvasDrawRef.current.eraseAll();
    }

    function getCurrentDraw() {
        return canvasDrawRef.current.getDataURL('jpeg', false, '#ffffff');
    }

}
