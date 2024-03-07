const  userService = require('../service/userService');
const {response} = require("express");

const register = async (req, resp)=>{
    try{
        const res = await userService.createUser(req.body)
        resp.status(200).json({res})
    }catch (error){
        resp.status(500).json(error.message)

    }
};


const login = async (req, resp)=>{
    return await userService.login(req.body)
        .then((response)=>resp.json(response))
        .catch((error)=>resp.json(error.message))
}
module.exports = {register, login}