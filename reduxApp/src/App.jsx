import { useState } from 'react'
import AddTodos from './components/addTodos'
import Todos from './components/todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddTodos />
      <Todos />
    </>
  )
}

export default App
