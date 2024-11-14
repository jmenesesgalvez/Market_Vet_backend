const pool = require('../config/db');
const bcrypt = require('bcryptjs');

exports.resetPassword = async (req, res) => {
    const { email, newPassword } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        const result = await pool.query('UPDATE users SET password = $1 WHERE email = $2', [hashedPassword, email]);

        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        res.json({ message: 'Contraseña actualizada exitosamente' });
    } catch (error) {
        console.error("Error en resetPassword:", error);
        res.status(500).json({ error: 'Error al actualizar la contraseña' });
    }
};
