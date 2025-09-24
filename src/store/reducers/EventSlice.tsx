import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface EventSliceTypes {
  id: number | string;
  title: string;
  detail: string;
  tag: string;
  date: string;
}

interface EventState {
  items: EventSliceTypes[];
}

const initialState: EventState = {
  items: [],
};

const EventSlice = createSlice({
  name: "EventSlice",
  initialState,
  reducers: {
    addItemToEvent: (state, action: PayloadAction<EventSliceTypes>) => {
      state.items.push(action.payload);
    },
    deleteItem: (state, action: PayloadAction<number | string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    setEvents: (state, action: PayloadAction<EventSliceTypes[]>) => {
      state.items = action.payload;
    },
  },
});

export const { addItemToEvent, deleteItem, setEvents } = EventSlice.actions;
export default EventSlice.reducer;
