const User = require("../model/user")
const NotFoundException = require('../exceptions/NotFoundException')
const {request} = require("express");
const createUser = async(request) => {
    const{firstName,lastName,email,password} = request;

    const user = await User.findOne({ email });
    if (user) {
        throw new NotFoundException("Email already exists");
    }

    const newUser = {
        firstName: firstName,
        lastName : lastName,
        email : email,
        password : password
    };
    const savedUser = await User.create(newUser)

    const response = {
        _id: savedUser._id,
        firstName: savedUser.firstName,
        lastName: savedUser.lastName,
        email: savedUser.email
    }
    return{
        data: response,
        message : "Registration Successful"
    }
}

const login = async (request)=>{
    const {email, password} = request;

    const user= await  User.findOne(email)
    if(!user){
        throw new NotFoundException("user does not exist");
    }
    if(user.password !== password){
        throw new NotFoundException("Invalid credentials")
    }
    return{
        msg: "login successful"
    }
}

module.exports = {createUser, login};