import React, { useState } from "react"

function Counter() {
  const [angka, setAngka] = useState(0);

  const hadleIncrement = () => {
    setAngka (angka + 1)
  }
  const hadleDecrement = () => {
    setAngka (angka - 1)
  } 

  return (
    <div>
      <h1>{angka}</h1>
      <button className="btn btn-primary" onClick={hadleIncrement}>
        INC
      </button>
      <button className="btn btn-danger" onClick={hadleDecrement}>
        DEC
      </button>
    </div>

  )
}

export default Counter
