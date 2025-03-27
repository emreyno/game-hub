import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '5042945a41c343af9e62cd5f8c9a571d'
    }
})