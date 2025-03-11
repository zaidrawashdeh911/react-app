import axios, { CanceledError } from "axios";

//configuration object
export default axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    // headers: {}
})

export {CanceledError};