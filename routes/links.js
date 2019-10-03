var express = require('express');
var router = express.Router();
var models = require('../models');


// GET: Links
const sendLinks = (req, res) => 
    models.link
    .findAll({
        attributes: [
            "id", "nombre", "descripcion", "url", "idCategoria"
        ]
    })
    .then((links) => res.send(links))
    .catch(() => res.sendStatus(500));

router.get('/', sendLinks);

// GET/:id : Links
const getOneLink = (req, res) => {
    findLink(req.params.id, {
        onSuccess: (link) => res.send(link),
        onNotFound: () => res.sendStatus(404),
        onError: () => res.sendStatus(500)
    });
}
router.get('/:id', getOneLink)

// POST: Link
const postLink = (req, res) => 
    models.link
    .create({
        nombre: req.body.nombre ,
        descripcion: req.body.descripcion ,
        url: req.body.url ,
        idCategoria: req.body.idCategoria
    })
    .then((link) => res.status(201).send({id: link.id}))
    .catch(() => res.sendStatus(500));

router.post('/', postLink);

// PUT: Link
const findLink = (id, { onSuccess, onNotFound, onError } ) => 
    models.link
    .findOne({
        where: {id},
        attributes: ['id', 'nombre', 'descripcion', 'url', 'idCategoria']
    })
    .then((link) => link ? onSuccess(link) : onNotFound())
    .catch(() => onError());

const putLink = (req, res) => {
    
    const onSuccess = link => 
        link.update(
            { nombre: req.body.nombre, descripcion: req.body.descripcion,
              url: req.body.url, idCategoria: req.body.idCategoria
            },
            { fields: ["nombre", "descripcion", "url", "idCategoria"] })
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500));
    
    findLink(req.params.id, { 
        onSuccess,
        onNotFound: () => res.sendStatus(404),
        onError: () => res.sendStatus(500)
    });
}
router.put('/:id', putLink);

// DELETE: Link
const deleteLink = (req, res) => {
    const onSuccess = (link) => 
        link.destroy()
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500))

    findLink(req.params.id, {
        onSuccess,
        onNotFound: () => res.sendStatus(404),
        onError: () => res.sendStatus(500)
    })
}
router.delete('/:id', deleteLink);

    



module.exports = router;