const Post = require('../models/posts.model')


const insertarPost = async(req,res,next) =>{
    try{
      
            const result =  await Post.insert(req.body);
            res.json(result)
    }catch(err){
        next(err)
    }
}


const seleccionarPost = async(req, res, next)=>{
   console.log(req.param);
    try{
        const {id} = req.params;
            const [[result]] =  await Post.select(id)
            res.json(result)
    }catch(err){
        next(err)
    }
}



module.exports = {
    insertarPost,
    seleccionarPost
}