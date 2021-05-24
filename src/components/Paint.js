import React from 'react';
import './Paint.css';

function Paint() {
  function handleMode(e) {
    e.preventDefault();
    console.log('Mode Button!');
  }

  function handleSave(e) {
    e.preventDefault();
    console.log('Save Button');
  }

  return (
    <div className="paint">
      <header className="paint-title">
        <h1>Palette</h1>
      </header>
      <canvas className="canvas" />
      <div className="controls">
        <div className="controls__range">
          <input
            className="range__width"
            type="range"
            min="0.1"
            max="5.0"
            defaultValue="2.5"
            step="0.1"
          />
        </div>
        <div className="controls__btns">
          <button type="button" onClick={handleMode}>
            Fill
          </button>
          <button type="button" onClick={handleSave}>
            Save
          </button>
        </div>
        <div className="controls__colors">
          <div className="controls__color controls__black" />
          <div className="controls__color controls__white" />
          <div className="controls__color controls__red" />
          <div className="controls__color controls__orange" />
          <div className="controls__color controls__yellow" />
          <div className="controls__color controls__green" />
          <div className="controls__color controls__skyblue" />
          <div className="controls__color controls__blue" />
          <div className="controls__color controls__purple" />
        </div>
      </div>
    </div>
  );
}

export default Paint;
