import { configureStore } from "@reduxjs/toolkit";
import FormReducer from "./forms/formSlice";
export default configureStore({
  reducer: {
    form: FormReducer,
  },
});
