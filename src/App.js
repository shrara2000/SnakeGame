
import './App.css';
import SvgCanvas from './Canvas/svg';
import Canvas from './Canvas/View';
import Snake from './Snake/Snake';
import FoodGen from './FoodGen/FoodGen';
import segment from './SnakeList';
import React, { useState } from 'react';
function App() {
  const startX=50;
  const startY=50;
  const startXF=50;
  const startYF=70;
  const [GameOver, setGameOver] = useState(false);
  const [currentXF,setCurrentXF] = React.useState(startXF);
  const [currentYF,setCurrentYF] = React.useState(startYF);
  const [Snk,setSnake] = React.useState(new segment(startX,startY));
  const [Score,setScore] = React.useState(0);
  const ResetGame=()=>{
    setCurrentXF(startXF)
    setCurrentYF(startYF)
    setGameOver(false)
    setSnake(new segment(startX,startY))
    setScore(0);
  }
  
 
  
  return (
    <div className="App" >
     
     
      
        <Canvas> 
          {GameOver && <div style={{color: 'red', fontSize: '24px'}}>Game Over! Your score was: {Score} <button className='button' onClick={ResetGame}>Replay</button></div>}
          <SvgCanvas width={'95vw'} height={'95vh'} style={{ background: 'gray' }}>
            <text x="10" y="20" fill="white" fontSize="20">Score: {Score}</text>
            <text x="10" y="40" fill="white" fontSize="20">Use W, A, S, D to move</text>
            {GameOver?<></>:
            <>
            <Snake Snake={Snk} Score={Score} setGameOver={setGameOver}  setSnake={setSnake} />
            <FoodGen currentYF={currentYF} currentXF={currentXF} setScore={setScore} setSnake={setSnake} Head={Snk}  setCurrentYF={setCurrentYF} setCurrentXF={setCurrentXF}/>
            </> 
            }
          
          
          
        </SvgCanvas>
       </Canvas>
      
    </div>
  );
}

export default App;
