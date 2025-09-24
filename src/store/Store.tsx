import { configureStore } from "@reduxjs/toolkit";
import EventSlice from "./reducers/EventSlice";
import userSlice from "./reducers/UserSlice";

export const store = configureStore({
  reducer: {
    EventSlice,
    userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
