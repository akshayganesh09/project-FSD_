const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
const User = require('../models/user');
const Road = require('../models/roads');
const Atho = require('../models/atho');
const Tender = require('../models/tender');
const Apply = require('../models/apply');


const mongoose = require('mongoose');
const user = require('../models/user');
const db = "mongodb+srv://akshay:akshaypwd@cluster0.v5bai.mongodb.net/projectdb?retryWrites=true&w=majority"
var bodyparser = require('body-parser');
router.use(bodyparser.json());

mongoose.connect(db,err=>{
    if(err){
        console.error('error!' + err)
    }else{
        console.log('connected to mongodb')
    }
})

router.get('/', (req,res) =>{
    res.send('from Api');
})

router.post('/add', (req,res)=>{
    res.header("Acess-Control-Allow-Origin","*")
    res.header('Acess-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
    console.log(req.body);
    var road = {
        productId : req.body.product.productId,
        roadName : req.body.product.roadName,
        issue : req.body.product.issue,
        accidentPornArea : req.body.product.accidentPornArea,
        rateOfAccident : req.body.product.rateOfAccident,
        complainerName : req.body.product.complainerName,
        phoneNumber : req.body.product.phoneNumber,
        imageUrl : req.body.product.imageUrl,
    }
    var road = new Road(road);
     road.save();
    // res.send("text ok");

})

router.post('/register', (req,res)=>{
    let userData = req.body
    let user = new User(userData);
    user.save((error , registeredUser)=>{
        if(error){
            console.log(error)
        }else{
            let payload = {subject: registeredUser._id}
            let token = jwt.sign(payload , 'secretkey')
            res.status(200).send({token})
        }
    })
})


router.post('/login', (req,res)=>{
    let userData = req.body

    User.findOne({email : userData.email}, (error,user)=>{
        if(error){
            console.log(error)
        }else{
            if(!user){
                res.status(401).send('Invalid email')
            }else{
                if(user.password !==userData.password){
                    res.status(401).send('invalid password')
                }else{
                    let payload = { subject: user._id}
                    let token = jwt.sign(payload, 'secretkey')
                    res.status(200).send({token})
                }
            }
        }
    })
})


router.post('/login1', (req,res)=>{
let userData = req.body
let atho = new Atho(userData);
atho.save((error, athorizedUser)=>{
    if(error){
        console.log(error)
    }else{
        let payload = { subject: athorizedUser._id}
        let token = jwt.sign(payload, 'secretkey')
        res.status(200).send({token})
    }
  })
// res.send('register')
})

router.post('/login2', (req,res)=>{
    let userData = req.body

    Atho.findOne({email: userData.email}, (error, user) =>{
        if(error){
            console.log('error')
          
        }else{
            if(!user){
                res.status(401).send('invalid email')
                
            }else{
                if(user.password !== userData.password){
                    res.status(401).send('invalid password')
                }else{
                    let payload = { subject:user._id}
                    let token = jwt.sign(payload, 'secretkey')
                    res.status(200).send({token})
                }
            }
        }
    })
})




router.get('/events',(req,res)=>{
    res.header("Acess-Control-Allow-Origin","*")
    res.header('Acess-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
    Road.find().then(function(products){
        res.send(products)
    })
})

router.get('/events1', (req,res)=>{
    res.header("Acess-Control-Allow-Origin","*")
    res.header('Acess-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
    Road.find().then(function(products){
        res.send(products)
    })
})

router.get('/tender',(req,res)=>{
    res.header("Acess-Control-Allow-Origin","*")
    res.header('Acess-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
    Tender.find().then(function(tenders){
        res.send(tenders)
    })

})

router.post('/add1', (req,res)=>{
    res.header("Acess-Control-Allow-Origin","*")
    res.header('Acess-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
    console.log(req.body);
    var tender={
        productId : req.body.product.productId,
        NameofRoad : req.body.product.NameofRoad,
        Nameofwork : req.body.product.Nameofwork,
        estimate : req.body.product.estimate,
        tenderfee : req.body.product.tenderfee,
        catogory : req.body.product.catogory,
    }
    var tender = new Tender(tender);
    tender.save();
    // res.send('hii u c me')
})

router.delete('/delete/:id', (req,res)=>{
    id=req.params.id
    if(mongoose.isValidObjectId(id)){
        console.log(id);
        res.header("Acess-Control-Allow-Origin","*")
        res.header('Acess-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
        Road.findByIdAndRemove(id,(err,doc)=>{
            if(err){res.send(err)}
            else{res.send(doc)}
        });  
    }else{
        return res.send('invalid object id')
    }
    // res.send('delete')
})

router.delete('/delete1/:id', (req,res)=>{
    id=req.params.id
    if(mongoose.isValidObjectId(id)){
        console.log(id);
        res.header("Acess-Control-Allow-Origin","*")
        res.header('Acess-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
        Tender.findByIdAndDelete(id,(err,doc)=>{
            if(err){res.send(err)}
            else{res.send(doc)}
        });
    }else{
        return res.send('invalid object id')
    }
    // res.send('wow')
})

router.get('/events/:id', (req,res)=>{
    id=req.params.id
    if(mongoose.isValidObjectId(id)){
        console.log(id);
        res.header("Acess-Control-Allow-Origin","*")
        res.header('Acess-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
        Road.findById(id).then(function(road){
            res.send(road)
        })
    }else{
        res.send('Invalid Id')
    }
})

router.put('/edit/:id', (req,res)=>{
    res.header("Acess-Control-Allow-Origin","*")
    res.header('Acess-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
    id=req.params.id
    console.log(req.body);

   var item={
        productId : req.body.productId,
        roadName : req.body.roadName,
        issue : req.body.issue,
        accidentPornArea : req.body.accidentPornArea,
        rateOfAccident : req.body.rateOfAccident,
        complainerName : req.body.complainerName,
        phoneNumber : req.body.phoneNumber,
        imageUrl : req.body.imageUrl,
    }
    if(item.productId!=null){
        Road.findOneAndUpdate({_id:id},{"$set":{productId:item.productId}})
        .then(function(road){
            road.save()
            res.send("successfully updated")
        })
    }
    if(item.roadName!=null){
        Road.findOneAndUpdate({_id:id},{"$set":{roadName:item.roadName}})
        .then(function(road){
            road.save()
            res.send("successfully updated")
        })
    }
    if(item.issue!=null){
        Road.findOneAndUpdate({_id:id},{"$set":{issue:item.issue}})
        .then(function(road){
            road.save()
            res.send("successfully updated")
        })
    }
    if(item.accidentPornArea!=null){
        Road.findOneAndUpdate({_id:id},{"$set":{accidentPornArea:item.accidentPornArea}})
        .then(function(road){
            road.save()
            res.send("successfully updated")
        })
    }
    if(item.rateOfAccident!=null){
        Road.findOneAndUpdate({_id:id},{"$set":{rateOfAccident:item.rateOfAccident}})
        .then(function(road){
            road.save()
            res.send("successfully updated")
        })
    }
    if(item.complainerName!=null){
        Road.findOneAndUpdate({_id:id},{"$set":{complainerName:item.complainerName}})
        .then(function(road){
            road.save()
            res.send("successfully updated")
        })
    }
    if(item.phoneNumber!=null){
        Road.findOneAndUpdate({_id:id},{"$set":{phoneNumber:item.phoneNumber}})
        .then(function(road){
            road.save()
            res.send("successfully updated")
        })
    }
    if(item.imageUrl!=null){
        Road.findOneAndUpdate({_id:id},{"$set":{imageUrl:item.imageUrl}})
        .then(function(road){
            road.save()
            res.send("successfully updated")
        })
    }
    // res.send('tes i am here')
})
 
router.post('/apply', (req,res)=>{
    let userData = req.body
    let apply = new Apply(userData);
    apply.save((error, appliedUser)=>{
        if(error){
            console.log(error)
        }else{
            res.status(200).send({appliedUser})
        }
    })
})




module.exports = router;
