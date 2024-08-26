import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WeatherState{
    humidity: number; 
    temperature: number;
    windSpeed: number;
} 


const  initialState: WeatherState ={
    humidity: 31,
    temperature: 25,
    windSpeed: 3.14
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState: initialState,
    reducers: {
        updateWeather(state, action: PayloadAction<{
            humidity: number;
            temperature: number;
            windSpeed: number;
        }>){
            state = action.payload
        }
    }
});


export const {updateWeather} = weatherSlice.actions; 
export default weatherSlice.reducer;