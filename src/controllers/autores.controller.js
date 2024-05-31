const { get } = require('mongoose');
const Autores = require('../models/autores.model')


const insertarAutor = async(req,res,next) =>{


  
    try{
      
            const result =  await Autores.insert(req.body);
            res.json(result)
    }catch(err){
        next(err)
    }
}


const seleccionarAutor = async(req, res, next)=>{
   console.log(req.param);
    try{
        const {id} = req.params;
            const [[result]] =  await Autores.select(id)
            res.json(result)
    }catch(err){
        next(err)
    }
}

const seleccionarPostbyAutor = async(req, res, next)=>{
    console.log(req.param);
     try{
         const {id} = req.params;
             const [result] =  await Autores.selectByAutor(id)
             res.json(result)
     }catch(err){
         next(err)
     }
 }

module.exports = {
    insertarAutor,
    seleccionarAutor,
    seleccionarPostbyAutor
}