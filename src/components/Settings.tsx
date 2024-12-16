import React, {ChangeEvent} from 'react';
import {Button} from "./Button";


import {Wrapper, WrapperButton, WrapperDisplay} from "./Counter";
import styled from "styled-components";

type CounterProps = {
    value: number
    increase: () => void
    reset: () => void
    minValue: number
    maxValue: number
    changeMaxValue: (value: number) => void
    changeMinValue: (value: number) => void
    setSettings:()=>void
   // error:boolean
}

export const Settings = ({ maxValue, minValue, changeMaxValue, changeMinValue, setSettings,}: CounterProps) => {


    const changeMaxValueHandler = (e:ChangeEvent<HTMLInputElement>)=>changeMaxValue(+e.currentTarget.value)
    const changeMinValueHandler = (e:ChangeEvent<HTMLInputElement>)=>changeMinValue(+e.currentTarget.value)

    return (
        <Wrapper>
            <WrapperDisplay>
                <StyledDisplaySettings>
                    <div>
                        <span>max value:</span>
                        <input type={'number'}
                               value={maxValue}
                               onChange={changeMaxValueHandler}/>
                    </div>
                    <div>
                        <span>min value:</span>
                        <input type={'number'}
                               value={minValue}
                               onChange={changeMinValueHandler} />
                    </div>
                </StyledDisplaySettings>
            </WrapperDisplay>
            <WrapperButton>
                <Button name={'set'} callback={setSettings}/>
            </WrapperButton>

        </Wrapper>

    );
};

const StyledDisplaySettings = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: flex-end;
    height: 90px;
`