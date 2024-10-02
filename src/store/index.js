import { configureStore } from "@reduxjs/toolkit";
import AuhtReducer from "../slice/auth";

export default configureStore({
    reducer: {
        auth: AuhtReducer,
    },
    devTools: true
})