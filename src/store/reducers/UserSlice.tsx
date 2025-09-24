import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface UserState {
  userData: { [key: string]: any } | null;
}

const initialState: UserState = {
  userData: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<{ [key: string]: any }>) => {
      state.userData = action.payload;
      AsyncStorage.setItem("USER_DATA", JSON.stringify(action.payload));
    },
    clearUserData: (state) => {
      state.userData = null;
      AsyncStorage.removeItem("USER_DATA");
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;
export default userSlice.reducer;
