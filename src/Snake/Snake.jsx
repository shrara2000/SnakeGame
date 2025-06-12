// Description: A simple Snake component that moves based on keyboard input
import React from 'react';
import segment from '../SnakeList';
//
const CheckCollision = (head) => {
  let current = head?.getNext()?.getNext()?.getNext();
  if (current === null) return false; // No segments to check against
  while (current) {
    if (head.getX() === current.getX() && head.getY() === current.getY()) {
      
      return true; // Collision detected
    }
    current = current.getNext();
  }
  return false; // No collision
}
 const moveSegments = (head, newX, newY) => {
 if (head.next===null) return head;
 let current =head
 while(current) {
  let tempX = current.getX();
  let tempY = current.getY();
  current.setX(newX);
  current.setY(newY);
  newX = tempX;
  newY = tempY;
  current = current.getNext();
 }
 return head;

 }
 const DrawSegment = ({x, y},idx) => {
  let item =<rect
    height={10}
    width={10}
    x={x}
    y={y}
    stroke={idx===1?'black':'darkgreen'}
    fill={idx%2===0?'lightgreen':'green' }
    strokeWidth={2}
  />
return item;}
 const iterateDraw = (head) => {
  let current = head; 
  let segments = [];
  let idx = 0;
  while (current) {
    segments.push(DrawSegment ({x: current.getX(), y: current.getY()},idx));
    idx++;
    current = current.getNext();
  }
return segments;}
const Snake = ({Score,Snake,setSnake,setGameOver}) => {
  // Calculate the position of the snake based on its coordinates
  const [prevMove, setPrevMove] = React.useState('');
  const canvas= document.getElementById('Canvas')
  const headBX= Snake.getX();
  const headBY= Snake.getY();
  const  maxwidth = canvas==null?10:canvas?.width.baseVal.value-canvas.width.baseVal.value%10-10
  const  maxheight = canvas==null?80:canvas?.height.baseVal.value-canvas.height.baseVal.value%10-10
  // Handle keyboard input to move the snake
  onkeydown = (event) => {  
     event.preventDefault();

     switch(event.key) {

       case 'w':
         if (prevMove==='s') return; // Prevent moving in the opposite direction
         if (Snake.getY() <= 0) return; // Prevent moving out of bounds
         setSnake(prevSnake => prevSnake=new segment(prevSnake.getX(), prevSnake.getY() - 10,prevSnake.getNext()));
         setPrevMove('w');
         
         break;
       case 's':
        
         if (prevMove==='w') return; // Prevent moving in the opposite direction
         if (Snake.getY() >= maxheight) return;
          setSnake(prevSnake => prevSnake=new segment(prevSnake.getX(), prevSnake.getY() + 10,prevSnake.getNext()));
          setPrevMove('s');
          
         break;
       case 'a':
          if (prevMove==='d') return; // Prevent moving in the opposite direction
          if (Snake.getX() <= 0) return; // Prevent moving out of bounds
          setSnake(prevSnake => prevSnake=new segment(prevSnake.getX() - 10, prevSnake.getY(),prevSnake.getNext()));
         setPrevMove('a');
     
         break;
       case 'd':
          if (prevMove==='a') return; // Prevent moving in the opposite direction
           if(Snake.getX() === maxwidth) return; // Prevent moving out of bounds  
          setSnake(prevSnake => prevSnake= new segment(prevSnake.getX() + 10, prevSnake.getY(),prevSnake.getNext()));
          setPrevMove('d');
          
         break;
       default:
          return; // Ignore other keys
     }}
     moveSegments(Snake, headBX, headBY);
    if (CheckCollision(Snake)) {
      setGameOver(true); // Set game over state if collision detected
      return;
    }
    
      
    
   

  return (
    <>
    
      
       {iterateDraw(Snake).map((segment, index) => (
        <React.Fragment key={index}>
          {segment}
        </React.Fragment> ))  }
      
    </>
  )
}
export default Snake;