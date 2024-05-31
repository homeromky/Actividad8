const { insertarPost, seleccionarPost } = require('../../controllers/posts.controller');

const router = require('express').Router();


router.post('/', insertarPost);
router.get('/:id', seleccionarPost);



module.exports = router;