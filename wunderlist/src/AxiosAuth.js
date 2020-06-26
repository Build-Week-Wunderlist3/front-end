import axios from "axios"

function axiosAuth () {
    const token = getToken()
    return axios.create({
    baseURL:"https://wunderlist3.herokuapp.com/",
    headers:{ authorization: `Bearer ${token}` }    
    })    
}

function getToken () {
    return localStorage.getItem("token");    
}

export default axiosAuth;