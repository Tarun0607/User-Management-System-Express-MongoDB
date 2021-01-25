const express = require('express')
const router = express.Router()
const User = require('../models/user')


router.get('/', async(req,res)=>{
    try{
        const users = await User.find() 
        res.json(users)
    }catch(err){
        res.send('Error '+ err)
    }
    
})


router.post('/', async(req, res)=>{
    const user = new User({
        id: req.body.id,
        name: req.body.name

    })

    try{
       const u1 = await user.save()
       res.json(u1)
    }catch(err){
        res.send('Error')
    }
})


router.get('/:id', async(req,res)=> {
    try{
        const user = await User.findById(req.params.id)
        res.json(user) 
    }catch(err){
        res.send("Error")
    }
})

router.patch('/:id', async(req,res) => {
    try{
        const user = await User.findById(req.params.id)
        user.id = req.body.id
        const u1 = await user.save()
        res.json(u1)
    }catch(err){
        res.send("Error");
    }
})

router.delete('/:id', async(req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        const u1 = await user.remove()
        res.json(u1)

    }catch(err){
        res.send("Error");
    }
});

module.exports = router