import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}
    >
      <div className='flex fixed bottom-12 flex-wrap justify-center inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
          <button
          onClick={() => setColor("red")}
          className='outline-none px-4 rounded-full py-1 text-white shadow-lg'
          style={{backgroundColor: "red"}}
          >Red</button>

          <button
          onClick={() => setColor("green")}
          className='outline-none px-4 rounded-full py-1 text-white shadow-lg'
          style={{backgroundColor: "green"}}
          >Green</button>

          <button
          onClick={() => setColor("blue")}
          className='outline-none px-4 rounded-full py-1 text-white shadow-lg'
          style={{backgroundColor: "blue"}}
          >Blue</button>

          <button
          onClick={() => setColor("gray")}
          className='outline-none px-4 rounded-full py-1 text-white shadow-lg'
          style={{backgroundColor: "gray"}}
          >Gray</button>
          
          <button
          onClick={() => setColor("yellow")}
          className='outline-none px-4 rounded-full py-1 text-black shadow-lg'
          style={{backgroundColor: "yellow"}}
          >Yellow</button>

          <button
          onClick={() => setColor("Pink")}
          className='outline-none px-4 rounded-full py-1 text-black shadow-lg'
          style={{backgroundColor: "Pink"}}
          >Pink</button>

          <button
          onClick={() => setColor("Purple")}
          className='outline-none px-4 rounded-full py-1 text-white shadow-lg'
          style={{backgroundColor: "purple"}}
          >Purple</button>

          <button
          onClick={() => setColor("lavender")}
          className='outline-none px-4 rounded-full py-1 text-black shadow-lg'
          style={{backgroundColor: "lavender"}}
          >Lavender</button>

          <button
          onClick={() => setColor("black")}
          className='outline-none px-4 rounded-full py-1 text-white shadow-lg'
          style={{backgroundColor: "black"}}
          >Black</button>

        </div>
      </div>
    </div>
  )
}

export default App
