import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider, useDispatch, useSelector } from "react-redux"
import { store } from './app/store'
import { addValue, removeValue } from './features/counterSlice'
function App() {
  const dispatch = useDispatch();
  const countt = useSelector((state) => state.count)
  const [add, setAdd] = useState(5);
  const [remove, setRemove] = useState(3);
  return (
    <>
      <h1>Count:{countt}</h1>

      <input type="text" value={add} onChange={(e) => setAdd(e.target.value.replace(/[^0-9]/g, '')) } />

      <button onClick={(e) => {
        e.preventDefault
        dispatch(addValue(add))
      }}>ADD</button><br /><br />

      <input type="text" value={remove} onChange={(e) => setRemove(e.target.value.replace(/[^0-9]/g, ''))} />

      <button onClick={(e) => {
        e.preventDefault
        dispatch(removeValue(remove))
      }} >REMOVE</button>
    </>
  )
}

export default App
