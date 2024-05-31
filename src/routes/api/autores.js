const { insertarAutor, seleccionarAutor, seleccionarPostbyAutor } = require('../../controllers/autores.controller');



const router = require('express').Router();


router.post('/', insertarAutor);
router.get('/:id', seleccionarAutor);
router.get('/posts/:id', seleccionarPostbyAutor);


module.exports = router;