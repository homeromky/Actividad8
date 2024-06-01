const { insertarAutor, seleccionarAutor, seleccionarPostbyAutor } = require('../../controllers/autores.controller');
const multer = require('multer');

const router = require('express').Router();
const upload = multer({dest: 'upload'});


router.post('/',upload.single('imagen'), insertarAutor);
router.get('/:id', seleccionarAutor);
router.get('/posts/:id', seleccionarPostbyAutor);


module.exports = router;