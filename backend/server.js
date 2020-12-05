const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const mongoose = require('mongoose');

//User Model (For user registration)
let User = require('./models/user.model');


app.use(cors());
app.use(bodyParser.json());
const connectionString = "mongodb+srv://admin:<password>@cluster0.4lfcg.mongodb.net/test"

mongoose.connect(connectionString,{ useNewUrlParser: true });


const connection=mongoose.connection;
connection.once('open',function(){
    console.log("MongoDB connected !!")
});

app.listen(PORT,function(){
    console.log("Serve is running on Port: " + PORT);
});

/* 
    User routes for
    - getting all the users
    - getting user based on unique id
    - adding users
*/

const userRoutes = express.Router();
app.use('/users',userRoutes);

/* 
    Method - GET
    Route - http://localhost:4000/users/
    @desc - Get all users
*/

userRoutes.route('/').get(function(req,res){
    User.find(function(err,users){
        if(err){
            console.log(err);
        }else{
            res.json(users);
        }
    });
});

/* 
    Method - GET
    Route - http://localhost:4000/users/{id}
    @desc - Get specific user based on id
*/

userRoutes.route('/:id').get(function(req,res){
    let id = req.params.id;
    User.findById(id,function(err,user){
        if(err){
            console.log(err)
        }
        else{
            res.json(user);
        }
    });
});

/* 
    Method - POST
    Route - http://localhost:4000/users/add/
    @desc - Add a user
*/

userRoutes.route('/add').post(function(req,res){
    let user = new User(req.body);

    user.save()
        .then(user => {
            res.status(200).json({'user': 'User added successfully'});
        })
        .catch(err => {
            res.status(400).send('User creation failed');
        });
});

/*
    Method - POST
    Route - http://localhost:4000/users/update/{id}
    @desc - Update a user details
*/

userRoutes.route('/update/:id').put(function(req,res){
    User.findById(req.params.id,function(err,user){
        if(!user)
            res.status(404).send("User not found");
        else
            /*user.name=req.body.name;
            user.email=req.body.email;*/

            user.amount=req.body.amount;

            user.save().then(user => {
                res.json(user);
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

// Transfer Model

const transferRoutes = express.Router();
let Transfer = require('./models/transfer.model');
app.use('/transfers',transferRoutes);

/* 
    Method - GET
    Route - http://localhost:4000/transfers/
    @desc - Get all transactions
*/

transferRoutes.route('/').get(function(req,res){
    Transfer.find(function(err,transfers){
        if(err){
            console.log(err);
        }else{
            res.json(transfers);
        }
    });
});

/* 
    Method - POST
    Route - http://localhost:4000/transfers/add/
    @desc - Add a new transaction
*/

transferRoutes.route('/add').post(function(req,res){
    let transfer = new Transfer(req.body);

    transfer.save()
        .then(transfer => {
            res.status(200).json({'transfer': 'transfer successful'});
        })
        .catch(err => {
            res.status(400).send('Transfer failed');
        });
});

