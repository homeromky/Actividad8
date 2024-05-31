const { insertarAutor, seleccionarAutor } = require('../../controllers/autores.controller');


const router = require('express').Router();


router.post('/', insertarAutor);
router.get('/:id', seleccionarAutor);


module.exports = router;