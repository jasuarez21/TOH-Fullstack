const debug = require('debug')('server:heroesController');
const Hero = require('../model/heroModel');

function heroesController() {
   async function getAll(req, res) {
    debug('dentro de la funcion getAll');
    const heroes = await Hero.find({});
    res.json(heroes);
  }
  async function createOne(req, res) {
    const newHero = new Hero(req.body);
    try{
      await newHero.save();
      res.json(newHero);
    } catch(error) {
      res.send(error);
    }
  }
  async function getById(req, res) {
    try {
      const heroById = await Hero.findById(
        req.params.heroId
      )
      res.json(heroById);
    } catch(error){
      res.send(error)
    }
  }
  async function updateById(req, res) {
  try{
    const updateHero = await Hero.findByIdAndUpdate(
      req.params.heroId,
      req.body,
      {new:true}
    );
    res.json(updateHero);
  }catch(error){
    res.send(error);
  }
  }
  async function deleteById(req, res) {
    try{
      await Hero.findByIdAndDelete(req.params.heroId);
      res.json();
    } catch(error){
      res.send(error);
    };
  };
  return {
    getAll,
    createOne,
    getById,
    updateById,
    deleteById,
  };
}
module.exports = heroesController;
