var express = require('express');
var router = express.Router();
var models = require('../models');

// GET: Categorias
router.get('/', function(req, res) {
    
    models.categoria
    .findAll({
        attributes: ["id", "nombre"]
    })
    .then( (categorias) => res.send(categorias))
    .catch( () => res.sendStatus(500));
    
});

const getOneCategorie = (req, res) => {
    const onSuccess = (categorie) => 
        res.send(categorie);
    
    findCategoria(req.params.id, {
        onSuccess,
        onNotFound: () => res.sendStatus(404),
        onError: () => res.sendStatus(500)
    })
    
}

router.get('/:id', getOneCategorie)

// POST: Categoria
router.post('/', function(req, res){
    models.categoria
    .create(
        { nombre: req.body.nombre }
    )
    .then((categorie) => res.status(201).send({id: categorie.id}))
    .catch(() => res.sendStatus(500));
});

const findCategoria = (id, { onSuccess, onNotFound, onError }) => 
    models.categoria
    .findOne({
        where: {id}
    })
    .then((categoria) => categoria ? onSuccess(categoria) : onNotFound())
    .catch(() => onError() );

// DELETE: Categoria
router.delete('/:id', function(req, res){
    const onSuccess = (categoria) => 
        categoria
        .destroy()
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500));
    
    findCategoria(req.params.id, {
        onSuccess,
        onNotFound: () => res.sendStatus(404),
        onError: () => res.sendStatus(500)
    })
});
module.exports = router;