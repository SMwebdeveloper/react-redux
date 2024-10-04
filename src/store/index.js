import { configureStore } from "@reduxjs/toolkit";
import AuhtReducer from "../slice/auth";
import ArticleReducer from "../slice/article";
export default configureStore({
    reducer: {
        auth: AuhtReducer,
        article: ArticleReducer
    },
    devTools: true
})