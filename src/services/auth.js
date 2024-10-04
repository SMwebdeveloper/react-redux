import axios from './api'

const AuthService = {
    async userRegister(user) {
        const response = await axios.post('/users', { user })
        return response
    },
    async userLogin(user) {

    },
    async getUser() {

    }
}

export default AuthService