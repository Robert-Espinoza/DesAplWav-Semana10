//rutas productos
const express = require('express');
const router = express.Route();
const productoController = require('../controllers/productoControllers');

//aapi usuario
router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProducto);
router.put('/:id', productoController.actualizarProducto);
router.get('/:id', productoController.verProducto);
router.delete('/:id', productoController.eliminarProducto);

module.exports = router