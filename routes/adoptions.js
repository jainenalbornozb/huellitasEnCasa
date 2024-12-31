const express = require('express'); 
const router = express.Router();
const path = require('path');
const animals = require(path.join(__dirname, '../data/animals.json')); // Ruta al JSON con los datos de animales

// Ruta para mostrar los detalles de un animal
router.get('/adoptDetail/:id', (req, res) => {
  const animalId = parseInt(req.params.id) // Captura el parámetro 'id' de la URL como número
  console.log(animalId);
  const animal = animals.find(a => a.id === animalId); // Busca el animal por ID
  console.log(animal);
  if (animal) {
    res.render('adoptDetail', { animal }); // Renderiza la vista adoptDetail.ejs con los datos del animal encontrado
  } else {
    res.status(404).render('error', {
      message: 'Animal no encontrado'
       }); // Página de error personalizada
  }
});
module.exports = router;

