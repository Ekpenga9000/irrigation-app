import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WeatherState {
  humidity: number;
  temperature: number;
  windSpeed: number;
}

const initialState: WeatherState = {
  humidity: 31,
  temperature: 25,
  windSpeed: 3.14,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    updateWeather(
      state,
      action: PayloadAction<{
        humidity: number;
        temperature: number;
        windSpeed: number;
      }>
    ) {
      state.humidity = action.payload.humidity;
      state.temperature = action.payload.temperature;
      state.windSpeed = action.payload.windSpeed;
    },
  },
});

export const { updateWeather } = weatherSlice.actions;
export default weatherSlice.reducer;

