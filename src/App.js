
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
  const [currentXF,setCurrentXF] = React.useState(50);
  const [currentYF,setCurrentYF] = React.useState(70);
  const [Snk,setSnake] = React.useState(new segment(startX,startY));
  const [Score,setScore] = React.useState(0);


  return (
    <div className="App" >
     
      <header className="App-header">
       <Canvas> 
        
        <SvgCanvas width={'95vw'} height={'95vh'} style={{ background: 'gray' }}>
          <text x="10" y="20" fill="white" fontSize="20">Score: {Score}</text>
          <text x="10" y="40" fill="white" fontSize="20">Use W, A, S, D to move</text>
          <Snake Snake={Snk} Score={Score}  setSnake={setSnake} />
          
          <FoodGen currentYF={currentYF} currentXF={currentXF} setScore={setScore} setSnake={setSnake} Head={Snk}  setCurrentYF={setCurrentYF} setCurrentXF={setCurrentXF}/> 
          
        </SvgCanvas>
       </Canvas>
      </header>
    </div>
  );
}

export default App;
