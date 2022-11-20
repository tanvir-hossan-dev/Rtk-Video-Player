import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/apiSlice/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducerPath,
  },
  middleware: (defaultmiddleware) => {
    defaultmiddleware.concat(apiSlice.middleware);
  },
});
