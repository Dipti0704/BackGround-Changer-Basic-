import { useState } from 'react';
import './App.css'

function App() {
  const [color,setcolor] = useState("olive") ;
 
  return (
    <>
    <div className='w-full h-screen duration-500'
    style={{backgroundColor : color}} >
      <div className='fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2 '> 
        <div className='flex flex-wrap  justify-center  gap-3 bg-white px-3 py-2  rounded-3xl'>
            <button      
            onClick={() => setcolor("red")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor : "red"}}>RED</button>

            <button
            onClick={() => setcolor("yellow")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor : "yellow"}}>YELLOW</button>

            <button
            onClick={() => setcolor("pink")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor : "pink"}}>PINK</button>

            <button
            onClick={() => setcolor("purple")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor : "purple"}}>PURPLE</button>

            <button
            onClick={() => setcolor("blue")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor : "blue"}}>BLUE</button>

            <button
            onClick={() => setcolor("silver")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor : "silver"}}>SILVER</button>
        </div>
      </div>
      

    </div>
    
    </>
  )
}

export default App

