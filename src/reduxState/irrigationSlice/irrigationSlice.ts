import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IrrigationState {
  isIrrigationOn: boolean;
  waterLevel: number;
  waterConsumption: number;
}

const initialState: IrrigationState = {
  isIrrigationOn: false,
  waterLevel: 100,
  waterConsumption: 400,
};

const irrigationSlice = createSlice({
  name: 'irrigation',
  initialState,
  reducers: {
    turnOnIrrigation(state) {
      state.isIrrigationOn = true;
    },
    turnOffIrrigation(state) {
      state.isIrrigationOn = false;
    },
    updateWaterLevel(state) {
      state.waterLevel =- 0.01;
    },
    updateWaterConsumption(state, action: PayloadAction<number>) {
      state.waterConsumption = action.payload;
    },
  },
});

export const {
  turnOnIrrigation,
  turnOffIrrigation,
  updateWaterLevel,
  updateWaterConsumption,
} = irrigationSlice.actions;

export default irrigationSlice.reducer;