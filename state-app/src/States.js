import React, { useState } from 'react'

export default function States() {

    const [x, setx] = useState(10) //hooks
    function fun(){
        setx(x * 2)

    }

  return (
    <div>
        <h1>Value of {x}</h1>
        <button onClick={fun}>Double</button>
    </div>
  )
}
