const express = require('express');

const {
    deleteProductAction,
    findProductAction,
    getProductAction,
    postProductAction,
    putProductAction,
    getAllProductAction
} = require('../controllers/product-controllers');

const router = express.Router();

router.get('/products/get-all', getAllProductAction);
router.get('/products/get/:id', getProductAction);
router.post('/products/find', findProductAction);
router.post('/products/add', postProductAction);
router.put('/products/update', putProductAction);
router.delete('/products/delete', deleteProductAction);

module.exports = router;