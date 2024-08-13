import axios from "axios"
import instance from "../../common/configs/axios-config"
import { IUser } from "../model/user.model"

export const loginAPI= async (user:IUser) => {
    console.log(`로그인 api에 넘어온 파라미터 : ${JSON.stringify(user)}`)
    try{
        const response = await axios.post('http://localhost:8080/api/auth/login', user)
        console.log("로그인 api" + response.data)
        return response.data
    }catch(error){
        console.log(error)
        return error
    }
}
export const existsByUsernameAPI= async (username:string) => {
    console.log(`existsByUsernameAPI 확인 : ${JSON.stringify(username)}`)
    try{
        const response = await axios.get('http://localhost:8080/api/auth/check', {params: {username}})
        console.log("existsByUsername api : " + response.data)
        return response.data
    }catch(error){
        console.log(error)
        return error
    }
}