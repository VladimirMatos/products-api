const { Router } = require("express");
const router = Router();
const db = require('../database/database');

router.get('/', async(req,res) =>{
    const getProduct = await db.query('CALL sp_GetProducts()');
    res.send(getProduct);
});

router.post('/', async(req,res) =>{
    const {nombre,categoria,precio} = req.body;
    const newProduct ={
        nombre,
        categoria,
        precio
    }
    await db.query('INSERT INTO products set ?',[newProduct]);
    const resultProduct = await db.query('CALL sp_GetProducts()');
    res.send(resultProduct);
});


module.exports = router;