import axios from "axios";

function axiosAPI(username) {
    return axios.get(`https://api.github.com/users/${username}`)
};

module.exports = axiosAPI