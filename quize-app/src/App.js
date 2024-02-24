//import Subject from './Subject'
import React, { useState } from 'react'
import { Java,Sql,Html } from './Subject'
import './style.css'



function App() {
  const [pgno, Setpage] = useState(1)

    function Changepage(p){
        Setpage(p)

    }
  return (
    <div>
        <button onClick={()=> Changepage(1)} className={pgno === 1?"activeButt" :" "}>Java</button>
        <button onClick={()=> Changepage(2)} className={pgno === 2?"activeButt" :" "}>Sql</button>
        <button onClick={()=> Changepage(3)} className={pgno === 3?"activeButt" :" "}>Html</button>
        {/* <h1>{pgno}</h1> */}
        {pgno === 1 && <Java />}
        {pgno === 2 && <Sql />}
        {pgno === 3 && <Html />}
    </div>
  )
}

export default App;
