import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    articles: [],
    error: null
}

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        getArticlesStart: state => {
            state.isLoading = true
        },
        getArticlesSuccess: (state, action) => {
            state.isLoading = false
            state.articles = action.payload
        },
        getAritclesFailure: (state, action) => {
            state.error = action.payload
        }
    }
})

export const { getArticlesStart, getArticlesSuccess, getAritclesFailure } = articleSlice.actions
export default articleSlice.reducer