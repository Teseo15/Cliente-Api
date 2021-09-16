const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// api/productos

router.post('/',productoController.crearProducto);
router.get('/',productoController.obtenerProductos);
router.put('/:id',productoController.update);
router.get('/:id',productoController.mostrar);
router.delete('/:id',productoController.deletep);

module.exports = router;