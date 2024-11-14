// server.js
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Importa rutas
const productRoutes = require('./routes/productRoutes');
const contactRoutes = require('./routes/contactRoutes');
const userRoutes = require('./routes/userRoutes'); // Asegúrate de importar userRoutes

// Configura rutas
app.use('/api/products', productRoutes);
app.use('/api', contactRoutes);
app.use('/api/users', userRoutes); // Configura la ruta base para usuarios

// Configuración de puerto y ejecución del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});





/* const express = require('express');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const app = express();

// Configuración de CORS para permitir solicitudes solo desde Netlify
const corsOptions = {
    origin: 'https://velvety-belekoy-21efd7.netlify.app', // URL exacta del frontend sin slash al final
    optionsSuccessStatus: 200,
  };
  app.use(cors(corsOptions));
  
  app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const productRoutes = require('./routes/productRoutes');
const contactRoutes = require('./routes/contactRoutes');

app.use('/api/products', productRoutes);
app.use('/api', contactRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
}); */



