import React from 'react'
import segment from '../SnakeList'
const addSeg = (head) => {
  let current = head; 
  while (current.getNext()) {
   
    current = current.getNext();
   
  }
  current.setNext(new segment(current.getX()-10, current.getY()-10));
 
}
function FoodGen({currentXF,currentYF,setCurrentXF,setCurrentYF,Head,setScore,setSnake}) {
  const canvas= document.getElementById('Canvas')
  const  maxwidth = canvas==null?10:canvas?.width.baseVal.value-canvas.width.baseVal.value%10-10
  const  maxheight = canvas==null?10:canvas?.height.baseVal.value-canvas.height.baseVal.value%10-10
 if (currentXF === Head.getX() && currentYF === Head.getY()) {
    addSeg(Head)
    setCurrentXF(Math.floor(Math.random() * (maxwidth / 10)) * 10)
    setCurrentYF(Math.floor(Math.random() * (maxheight / 10)) * 10)
    setScore(prevScore => prevScore + 1) // Increment score when food is eaten
    
  }

  return (
    <rect
      x={currentXF}
      y={currentYF}
      height={10}
      width={10}
      stroke='red'
      fill='lightcoral'
    />
  )
}

export default FoodGen