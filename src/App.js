import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [Color, SetColor] = useState('#aaaaaa');
  const [Colors, SetColors] = useState([]);
  const [LastGuess, SetLastGuess] = useState('');
  const [ShowBubble, SetShowBubble] = useState(0);

  const colorGenerator = () => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return `#${randomColor}`;
  }

  const colorsList = () =>{
    let colorArr = [colorGenerator(), colorGenerator(), colorGenerator()];
    colorArr[Math.floor(Math.random() * 3)] = Color;
    return colorArr;
  }

  // Empty dependency array to only do at the beginning of the code being run
  useEffect(()=> {
    SetColor(colorGenerator());
    }, []);

  // This uses Color in a dependency array because it will update whenever color updates,
  // if it ran in the same useEffect as SetColor, at times SetColor would not update fast enough
  // and this would lead a bug with the original Color state being used
  useEffect(()=>{
    SetColors(colorsList());
    }, [Color]);

  useEffect(()=>{
    if(LastGuess == Color){
      SetColor(colorGenerator());
      SetShowBubble(1);
    }
    else if (LastGuess !== ''){
      SetShowBubble(2);
    }
  }, [LastGuess])

  return (
    <div className="App">
      <div className='Color' style = {{background: Color}}></div>
      <div id="buttons">
       {
        Colors.map((col) => {
          return <button onClick={ () =>{
              SetLastGuess(col);
            }
          }
          > {col} </button>
        })
       }
      </div>
      <div>
        {
          ShowBubble == 1 ? <div id='correct'> Correct </div>: null
        }
        {
          ShowBubble === 2 ? <div id='wrong'> Wrong! </div>: null
        }
      </div>
    </div>
  );
}

export default App;
