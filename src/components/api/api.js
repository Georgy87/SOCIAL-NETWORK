import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "2e2ad3cb-84a8-40d2-844a-fb383504df08"
    }
});

export const usersApi = {
    getUser(currentPage = 1, pageItems = 10) {
        return instance.get(
            `users?page=${currentPage}
            &count=${pageItems}`,
        ).then(res => res.data)
    },
    getUserPagination(page, pageItems) {
        return instance.get(
            `users?page=${page}
            &count=${pageItems}`,
        ).then(res => res.data)
    }
}

export const profileApi = {
    getProfile(userId) {
        return instance.get(
            `profile/${userId}`
        )
    },
    getStatus(userId) {
        return instance.get(
            `profile/status/${userId}`
        )
    },
    upDateStatus(status) {
        console.log(status);
        return instance.put(
            'profile/status', {status: status}
        )
    }
}

export const followApi = {
    deleteFollow(userId) {
        return instance.delete(`follow/${userId}`)
        .then(res => res.data)
    },
    postFollow(userId) {
        return instance.post(`follow/${userId}`, {},)
        .then(res => res.data)
    }
}

export const apiAuth = {
    getAuth() {
        return instance.get("https://social-network.samuraijs.com/api/1.0/");
    }
}






