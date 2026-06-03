import {useState} from 'react'

function Hooks(){
    const[counter, setCounter] = useState(10);
    const increment = () => {
        setCounter(counter + 1);
    }
    const decrement = () => {
        setCounter(counter - 1);
    }
    const reset = () => {
        setCounter(0);
    }
    return(
        <div>
        <h1>Buttons</h1>
        <button onClick={increment}>Increment{counter}</button>
        <br></br>
        <button onClick={decrement}>Decrement{counter}</button>
        <br></br>
        <button onClick={reset}>Reset</button>
        <p>Counter: {counter}</p>
        </div>
    )

}

export default Hooks;   