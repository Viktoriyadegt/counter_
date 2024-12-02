import React, {useState} from 'react';
import {Counter} from "./components/Counter";
import styled from "styled-components";

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

            <Wrapper className="App-header">
                <Counter value={value}
                         increase={increase}
                         reset={reset}
                         minValue={minValue}
                         maxValue={maxValue}
                />
            </Wrapper>

    );
}

const Wrapper = styled.div`
    text-align: center;
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`

export default App;
