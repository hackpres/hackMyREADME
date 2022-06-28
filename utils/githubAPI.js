import axios from "axios";

function axiosAPI(username) {
    return axios.get(`https://api.github.com/users/${username}`)
};

export default axiosAPI;