// userRoutes.js
const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/userController'); // Importar el controlador

router.post('/register', register); // Ruta para registro de usuario
router.post('/login', login);       // Ruta para inicio de sesión

module.exports = router;




