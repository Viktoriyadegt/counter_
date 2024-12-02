import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter";

function App() {

    const [minValue, setMinValue] = useState(0);
    const [maxValue, setmaxValue] = useState(5);
    const [value, setValue] = useState(minValue);


    const increase = () => {
        setValue(value + 1)
    }

    const reset = () => {
        setValue(0)
    }

    return (
        <div className="App">
            <header className="App-header">
                <Counter value={value}
                         increase={increase}
                         reset={reset}
                         minValue={minValue}
                         maxValue={maxValue}
                />
            </header>
        </div>
    );
}

export default App;
