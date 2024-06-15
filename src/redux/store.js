import { configureStore } from "@reduxjs/toolkit";
import spendingListSlice from "./spendingListSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    spendingList: spendingListSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
