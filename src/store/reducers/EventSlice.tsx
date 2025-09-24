import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EventSliceTypes {
  id: number | string;
}

interface EventState {
  items: EventSliceTypes[];
}

const initialState: EventState = {
  items: [],
};

const EventSlice = createSlice({
  name: "Event",
  initialState,
  reducers: {
    // Add Item To Event
    addItemToEvent: (state, action) => {
        state.items.push({
          ...action.payload,
        });
      },
    
    // Delete Item From Event
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItemToEvent, deleteItem } =
  EventSlice.actions;
export default EventSlice.reducer;
