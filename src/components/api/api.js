import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true
});

export const getUser = (currentPage = 1, pageItems = 10) => {
    return instance.get(
        `users?page=${currentPage}
        &count=${pageItems}`,
    );
};

export const getUserPagination = (page, pageItems) => {
    return instance.get(
        `users?page=${page}
        &count=${pageItems}`,
    );
};


