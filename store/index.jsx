import { configureStore } from "@reduxjs/toolkit";
import rootApiSlice from "./services/rootApiSlice";
import authReducer from './services/authSlice'

const store = configureStore({
  reducer: {
    [rootApiSlice.reducerPath]: rootApiSlice.reducer,
    auth:authReducer
  },
 middleware: getDefaultMiddelware => getDefaultMiddelware().concat(
        rootApiSlice.middleware,
    )
});

export default store