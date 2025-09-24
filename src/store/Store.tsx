import { configureStore } from "@reduxjs/toolkit";
import EventSlice from "./reducers/EventSlice";

export const store = configureStore({
  reducer: {
    EventSlice: EventSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
