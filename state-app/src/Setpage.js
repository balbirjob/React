import React, { useState } from 'react'

export default function Setpage() {
    const [pgno, Setpage] = useState(1)

    function Changepage(p){
        Setpage(p)

    }
  return (
    <div>
        <button onClick={()=> Changepage(1)}>1</button>
        <button onClick={()=> Changepage(2)}>2</button>
        <button onClick={()=> Changepage(3)}>3</button>
        {/* <h1>{pgno}</h1> */}
        {pgno === 1 && <h1>Java</h1>}
        {pgno === 2 && <h1>SQL</h1>}
        {pgno === 3 && <h1>HTML</h1>}
    </div>
  )
}
