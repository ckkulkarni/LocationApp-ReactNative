import { configureStore } from "@reduxjs/toolkit";
import LocationReducer from '../reducers';

const store = configureStore({
    reducer: {
        LocationStore: LocationReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;