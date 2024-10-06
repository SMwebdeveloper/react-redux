import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    articles: [],
    articleDetail: null,
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
        },
        getArticleDetailStart: state => {
            state.isLoading = true
        },
        getArticleDetailSuccess: (state, action) => {
            state.articleDetail = action.payload
            state.isLoading = false
        },
        getArticleDetailFailure: state => {
            state.isLoading = false
        }
    }
})

export const { getArticlesStart, getArticlesSuccess, getAritclesFailure, getArticleDetailFailure, getArticleDetailSuccess, getArticleDetailStart } = articleSlice.actions
export default articleSlice.reducer