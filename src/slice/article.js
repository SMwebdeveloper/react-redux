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
            state.articles = action.payload
            state.isLoading = false
        },
        getAritclesFailure: (state, action) => {
            state.error = action.payload
        }
    }
})

export const { getArticlesStart, getArticlesSuccess, getAritclesFailure } = articleSlice.actions
export default articleSlice.reducer