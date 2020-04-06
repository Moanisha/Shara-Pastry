const User = require('../models').User;
const Product = require('../models').Product;
const bcrypt = require("bcrypt");

exports.addUser =(req,res)=> {
    let {username, email, password} = req.body;

    return User.findOne({
        where: {
            username :username
        }
    }).then((user)=>{
        if(!user){
            User.create({
                username,
                email,
                password
            })
            .then((user)=>{
                res.json({message: "Account created successfully"})
            })        
            .catch((err)=>{
                res.status(404).send(err);
            })
        } else {
            res.status(400).json({message: "Username already exists"})
        }
    })
    .catch((err)=>{
        res.status(404).send(err);
    })
}

exports.login =(req,res)=> {
    let {username, email, password} = req.body;
    console.log(req.body);
    return User.findOne({
        where:{
            username: username
        }
    })
    .then((user)=>{
        if(!user){
            res.status(400).json({message: "Username / password is wrong"})
        }
        else if(!bcrypt.compareSync(password, user.password)){
            res.status(400).json({message: "Username / password is wrong"})
        }
        else{
            res.json({
                id: user.id,
                username: user.username,
                email: user.email,
                isLoggedIn: true
            })
        }
    })
    .catch((err)=>{
        res.status(404).send(err);
    })
}

exports.logout =(req,res)=> {
    return (
        res.json({
            isLoggedIn: false,
            message: "Logged out successfully"
        })
    )
        
}

exports.getUserFav = (req,res) => {
    let id = req.params.id;
    User.findByPk(id, {
        include: [{
            model: Product, as:"loves"
        }]
    })
    .then(user => {
        console.log(user)
        res.json(user);
    })
    .catch(error => {
        res.status(404).send(error);
    })
}
