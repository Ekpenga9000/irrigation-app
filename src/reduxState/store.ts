import {configureStore} from "@reduxjs/toolkit"; 
import authReducer from "./authSlice/authSlice";
import weatherSlice from "./weatherSlice/weatherSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        weather: weatherSlice
    }, 
}); 

export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch; 