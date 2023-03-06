import './App.css';
import { useState } from 'react';
import Circle from './Circle.js'

/*
Problem Statement:
Add a circle at the location the user clicks on the Window. Include 2 buttons, undo and redo
where undo will remove the last placed element and redo will replace the last undone element.
*/

function App() {
  const [Circles, SetCircles] = useState([]);
  const [Redo, SetRedo] = useState([])

  const handleClick = (e) => {
    const myColor = "rgb(" + Math.floor(Math.random() * 255)
      + "," + Math.floor(Math.random() * 255) + ","
      + Math.floor(Math.random() * 255) + ")"
    SetCircles([...Circles, { x: e.clientX, y: e.clientY, color: myColor }]);
  }

  const handleUndo = (e) => {
    e.stopPropagation();
    const lastCircles = Circles.pop();
    if (lastCircles != undefined) {
      SetCircles(Circles);
      SetRedo([...Redo, lastCircles]);
    }
  }

  const handleRedo = (e) => {
    e.stopPropagation()
    const addBack = Redo.pop();
    if (addBack != undefined) {
      SetCircles([...Circles, addBack])
    }

  }

  return (

    <div className="App" onClick={handleClick}>
      <button onClick={handleUndo}> Undo </button>
      <button onClick={handleRedo}> Redo</button>

      {Circles.map((cir) => {
        return <Circle x={cir.x} y={cir.y} color={cir.color} />
      })}

    </div>
  )
}

export default App;