import {RootState} from "../../app/store";

export const selectCount = (state: RootState) => state.counter.count
export const selectMinValue = (state: RootState) => state.counter.minValue
export const selectMaxValue = (state: RootState) => state.counter.maxValue
export const selectStatus= (state: RootState) => state.counter.status