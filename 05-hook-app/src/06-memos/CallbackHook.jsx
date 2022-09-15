import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {

  const [counter, setCounter] = useState(10)

  const  incrementFather = useCallback(
    (newValue) => {
      setCounter((value)=>value + newValue)
    },
    [],
  )
  

  // const increment =()=>{
  //   setCounter(counter +1)
  // }

  return (
    <>
      <h1>useCallback Hokk :{counter} </h1>
      <hr/>
      <ShowIncrement increment={incrementFather}/>
  </>
  )
}
