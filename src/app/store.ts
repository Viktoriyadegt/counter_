import {combineReducers, legacy_createStore as createStore} from 'redux'
import {counterReducer} from "../features/model/counter-reducer";
import {loadState, saveState} from "./localStorage";



const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    });
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


/*export type AppStoreType = typeof store
export type RootStateType = ReturnType<AppStoreType['getState']>
export type AppDispatch = AppStoreType['dispatch']*/

