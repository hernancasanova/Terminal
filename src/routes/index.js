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

router.get("/delete/:id", async (req,res) => {
    const { id }= req.params;
    await Recorrido.remove({_id: id});
    res.redirect("/");
});

router.get("/edit/:id", async (req,res) => {
    const { id }= req.params;
    const recorrido = await Recorrido.findById(id);
    res.render("edit", {
    	recorrido
    });
});

router.post("/edit/:id", async (req,res) => {
    const { id }= req.params;
    await Recorrido.update({_id :id}, req.body);
    res.redirect("/");
});

module.exports = router;