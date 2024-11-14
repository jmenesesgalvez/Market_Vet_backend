const pool = require('../config/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Función de registro de usuarios
const register = async (req, res) => {
    const { nombre, email, password } = req.body;
    try {
        // Hashear la contraseña antes de almacenarla
        const hashedPassword = await bcrypt.hash(password, 10);

        await pool.query(
            'INSERT INTO users (nombre, email, password) VALUES ($1, $2, $3)',
            [nombre, email, hashedPassword]
        );
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        console.error("Error en register:", error);
        res.status(500).json({ error: 'Error al registrar usuario' });
    }
};

// Función de login de usuarios
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        console.log("Intentando iniciar sesión con email:", email);

        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        const user = result.rows[0];

        if (!user) {
            console.log("Usuario no encontrado");
            return res.status(401).json({ error: 'Credenciales incorrectas' });
        }

        // Comparar la contraseña usando bcrypt
        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log("Contraseña válida:", isPasswordValid);

        if (!isPasswordValid) {
            console.log("Contraseña incorrecta");
            return res.status(401).json({ error: 'Credenciales incorrectas' });
        }

        // Verificar si la variable JWT_SECRET está configurada
        console.log("JWT_SECRET:", process.env.JWT_SECRET);
        if (!process.env.JWT_SECRET) {
            return res.status(500).json({ error: 'Falta la clave secreta JWT' });
        }

        // Firmar el token JWT
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        console.log("Token generado:", token);

        res.json({ message: 'Login exitoso', token, user: { name: user.nombre } });
    } catch (error) {
        console.error("Error en login:", error);
        res.status(500).json({ error: 'Error en el login' });
    }
};

// Función para restablecer la contraseña
const resetPassword = async (req, res) => {
    const { email, newPassword } = req.body;

    try {
        console.log("Intentando restablecer la contraseña para:", email);

        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        const user = result.rows[0];

        if (!user) {
            console.log("Usuario no encontrado");
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await pool.query('UPDATE users SET password = $1 WHERE email = $2', [hashedPassword, email]);

        res.json({ message: 'Contraseña actualizada exitosamente' });
    } catch (error) {
        console.error("Error en resetPassword:", error);
        res.status(500).json({ error: 'Error al actualizar la contraseña' });
    }
};

// Nota: Aunque la funcionalidad de logout se maneja en el frontend, 
// podrías agregar una ruta que confirme la acción al frontend.
const logout = (req, res) => {
    res.json({ message: 'Sesión cerrada correctamente' });
};

module.exports = { register, login, resetPassword, logout };








