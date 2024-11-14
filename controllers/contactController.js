const pool = require('../config/db');

const saveContact = async (req, res) => {
    const { nombre, telefono, correo, pregunta } = req.body;

    try {
        await pool.query(
            'INSERT INTO contacts (nombre, telefono, correo, pregunta) VALUES ($1, $2, $3, $4)',
            [nombre, telefono, correo, pregunta]
        );
        res.status(201).json({ message: 'Contacto guardado exitosamente' });
    } catch (error) {
        console.error('Error al guardar el contacto:', error);
        res.status(500).json({ error: 'Error al guardar el contacto' });
    }
};

module.exports = { saveContact };

