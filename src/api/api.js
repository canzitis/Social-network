import * as axios from 'axios'


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "ef56c068-0977-40f6-bb0a-3ef42a85d7fe",
    },
})

export const securityAPI = {}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },

    login(email, password, rememberMe) {
        return instance.post(`auth/login`, {
                email,
                password,
                rememberMe
            })
            .then(response => {
                return response.data
            })
    },

    logout() {
        return instance.delete(`auth/login`)
            .then(response => {
                return response.data
            })
    }
}

export const userAPI = {
    getUsers(currenPage, pageSize) {
        return instance.get(`users?page=${currenPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }

}

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => {
                return response.data
            })
    },

    getStatus(id) {
        return instance.get(`profile/status/${id}`)
            .then(response => {
                return response.data
            })
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {
            status: status
        }).then(response => {
            return response.data
        })
    },

    loadingAvatar(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }).then(response => {
            return response.data
        })
    }
}

export const followAPI = {
    deleteUnfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },

    postFollow(id) {
        return instance.post(`follow/${id}`, {})
            .then(response => {
                return response.data
            })
    }
}