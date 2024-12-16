import React, {useEffect, useState} from 'react';
import {Counter} from "./components/Counter";
import styled from "styled-components";
import {Settings} from "./components/Settings";

function App() {

    const [minValue, setMinValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(0);
    const [value, setValue] = useState<number>(0);
    //const [error, setError] = useState<boolean>(false);


    useEffect(()=>{
        let startValue = localStorage.getItem('startValue')
        if(startValue){
            setValue(JSON.parse(startValue))
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem('startValue', JSON.stringify(value));
    }, [value])


    const increase = () => {
        setValue(value + 1)
    }

    const reset = () => {
        setValue(minValue)
    }

    const changeMaxValue = (maxValue: number) =>{
        setMaxValue(maxValue)
    }

    const changeMinValue = (minValue: number) =>{
        setMinValue(minValue)
    }

    const setSettings = ()=>{
        changeMaxValue(maxValue)
        changeMinValue(minValue)
        setValue(minValue)
    }

    return (

            <Wrapper className="App-header">
                <Counter value={value}
                         increase={increase}
                         reset={reset}
                         minValue={minValue}
                         maxValue={maxValue}
                         //error={error}
                />
                <Settings value={value}
                          increase={increase}
                          reset={reset}
                          minValue={minValue}
                          maxValue={maxValue}
                          changeMaxValue={changeMaxValue}
                          changeMinValue={changeMinValue}
                          setSettings={setSettings}
                          //error={error}
                />
            </Wrapper>

    );
}

 const Wrapper = styled.div`
     text-align: center;
     background-color: #282c34;
     min-height: 100vh;
     display: flex;
     align-items: center;
     justify-content: center;
     font-size: calc(10px + 2vmin);
     gap: 70px;
     color: white;
 `

export default App;
