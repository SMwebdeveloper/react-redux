import axios from './api'

const ArticleService = {
    async getArticles() {
        const { data } = await axios.get('/articles?limit=280')
        return data
    },
    async getArticleDetails(slug) {
        const { data } = await axios.get(`/articles/${slug}`)
        return data
    },
    async postArticle(article) {
        const { data } = await axios.post(`/articles`, { article })
        return data
    },
    async deleteArticle(slug) {
        const { data } = await axios.delete(`/articles/${slug}`)
        return data
    }
}

export default ArticleService