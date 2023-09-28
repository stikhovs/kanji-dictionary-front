import React, { useRef, useState, useEffect } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import DrawButtons from '../draw-buttons/DrawButtons';

import './DrawForm.css';
import axios from 'axios';


export default function DrawForm({ onPredictionsChange }) {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    const canvasDrawRef = useRef();
    const [previousDraw, setPreviousDraw] = useState('');


    useEffect(() => {
        getCurrentDraw()
            .then((data) => {
                setPreviousDraw(data);
            });
    }, []);

    function handleSubmit() {
        getCurrentDraw()
            .then(data => {
                if (data === previousDraw) {
                    console.log("No changes");
                    return;
                }
                axios({
                    method: 'POST',
                    url: `${BACKEND_URL}/recognize?size=20`,
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    data: data
                })
                    .then(response => response.data)
                    .then(preds => {
                        onPredictionsChange(preds);
                    })
                    .then(setPreviousDraw(data))
                    .catch(ex =>
                        console.log(ex)
                    );
            })
            .catch(ex =>
                console.log(ex)
            );


    }

    function handleUndo() {
        canvasDrawRef.current.undo();
    }


    function handleClear() {
        canvasDrawRef.current.resetCanvas();
    }

    function getCurrentDraw() {
        return canvasDrawRef.current.exportImage("jpeg");
    }

    return (
        <div id='draw-form-block'>
            <div id='canvas-draw-block'>
                {/* https://github.com/vinothpandian/react-sketch-canvas  */}
                <ReactSketchCanvas
                    ref={canvasDrawRef}
                    className='kanjiDraw'
                    width="200px"
                    height="200px"
                    strokeWidth={5}
                    strokeColor="black"
                    backgroundImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVZiKelvaDIrQOGhQoVElKRrn72KWDOM9Ui9QJIcLw05ildEYMHgbg190wG7TJZDjOX94&usqp=CAU'
                />
            </div>
            <DrawButtons
                onSubmitButton={handleSubmit}
                onUndoButton={handleUndo}
                onClearButton={handleClear} />
        </div>
    );

}
