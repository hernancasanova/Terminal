const express = require('express');
const router = express.Router();
const Recorrido = require('../models/recorrido');


router.get('/', async (req, res) => {
  const recorridos = await Recorrido.find();
  res.render('index', {
    recorridos
  });
});

router.post('/add', async (req, res, next) => {
  const recorrido = new Recorrido(req.body);
  console.log(req.body);
  await recorrido.save();
  res.redirect('/');
});


module.exports = router;