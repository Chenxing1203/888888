const express=require('express')
var router=express.Router()
const user=require('../sql/user')

router.get('/',function (req,res,next) {
         console.log('此时进入注册里了')
         res.render('zuce')
    
})

router.post('/in',function(req,res,next){
    console.log('此时进入了注册的in里面了')
    let obj = req.body
    console.log(obj)

    user.findOne({username:obj.username},(err,data)=>{
        if(err){
            console.log('err')
        }
        if(data) {
            res.redirect('/zuce')
        }else {
            user.insertMany(obj,(err,data)=>{
                if(err){
                    console.log(err)
                }
                console.log(data)
                res.redirect('/login')
            })
        }
    })

    
})


module.exports=router