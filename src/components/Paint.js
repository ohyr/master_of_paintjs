import React, { useState, useRef, useEffect } from 'react';
import './Paint.css';

function Paint() {
  const canvasRef = useRef();
  const contextRef = useRef();

  const [ctx, setCtx] = useState();
  const [painting, setPainting] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 700;
    canvas.height = 700;

    const context = canvas.getContext('2d');
    context.strokeStyle = 'black';
    context.lineWidth = 5.0;
    contextRef.current = context;

    setCtx(context);
    return () => {};
  }, []);

  function startPainting() {
    setPainting(true);
  }

  function stopPainting() {
    setPainting(false);
  }

  function onPainting({ nativeEvent }) {
    const { offsetX, offsetY } = nativeEvent;

    if (ctx) {
      if (!painting) {
        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY);
      } else {
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
      }
    }
  }

  function handleRangeChange({ nativeEvent }) {
    const size = nativeEvent.target.value;
    ctx.lineWidth = size;
  }

  function handleColorClick({ nativeEvent }) {
    const color = window.getComputedStyle(nativeEvent.target).backgroundColor;
    ctx.strokeStyle = color;
  }

  function handleSaveClick() {
    const image = canvasRef.current.toDataURL();
    const link = document.createElement('a');
    link.href = image;
    link.download = 'Mater_Of_PaintJS[🎨]';
    link.click();
  }

  return (
    <div className="paint">
      <header className="paint-title">
        <h1>Palette</h1>
      </header>
      <canvas
        className="canvas"
        ref={canvasRef}
        onMouseDown={startPainting}
        onMouseUp={stopPainting}
        onMouseMove={onPainting}
        onMouseLeave={stopPainting}
      />
      <div className="controls">
        <div className="controls__range">
          <input
            className="range__width"
            type="range"
            min="0.1"
            max="10.0"
            defaultValue="5.0"
            step="0.1"
            onInput={handleRangeChange}
          />
        </div>
        <div className="controls__colors">
          <div
            className="controls__color controls__black"
            onClick={handleColorClick}
            aria-hidden="true"
            tabIndex="0"
            role="button"
          />
          <div
            className="controls__color controls__white"
            onClick={handleColorClick}
            aria-hidden="true"
            tabIndex="0"
            role="button"
          />
          <div
            className="controls__color controls__red"
            onClick={handleColorClick}
            aria-hidden="true"
            tabIndex="0"
            role="button"
          />
          <div
            className="controls__color controls__orange"
            onClick={handleColorClick}
            aria-hidden="true"
            tabIndex="0"
            role="button"
          />
          <div
            className="controls__color controls__yellow"
            onClick={handleColorClick}
            aria-hidden="true"
            tabIndex="0"
            role="button"
          />
          <div
            className="controls__color controls__green"
            onClick={handleColorClick}
            aria-hidden="true"
            tabIndex="0"
            role="button"
          />
          <div
            className="controls__color controls__skyblue"
            onClick={handleColorClick}
            aria-hidden="true"
            tabIndex="0"
            role="button"
          />
          <div
            className="controls__color controls__blue"
            onClick={handleColorClick}
            aria-hidden="true"
            tabIndex="0"
            role="button"
          />
          <div
            className="controls__color controls__purple"
            onClick={handleColorClick}
            aria-hidden="true"
            tabIndex="0"
            role="button"
          />
        </div>
        <div className="controls__btns">
          <button type="button" onClick={handleSaveClick}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Paint;
