import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Location {
    address: any;
    time: any;
}
interface LocationState {
    recentLocations: Location[];
}
const initialState: LocationState = {
    recentLocations: []
}
const LocationSlice = createSlice({
    name: 'Location',
    initialState,
    reducers: {
        initializeLocations(state, action: PayloadAction<Location[]>) {
            state.recentLocations = action.payload;
        },
        
        addLocation: (state, action: PayloadAction<Location>) => {
            const newLocation = action.payload;
            state.recentLocations = [...state.recentLocations, newLocation];
            if (state.recentLocations.length > 30) {
                state.recentLocations.pop();
            }
        },
        clearLocation: (state, action: PayloadAction<number>) => {
            if (action.payload) {
                state.recentLocations.splice(action.payload, 1);
            } else {
                state.recentLocations = [];
            }
        }
    }
});
export const { initializeLocations, addLocation, clearLocation } = LocationSlice.actions;
export default LocationSlice.reducer;