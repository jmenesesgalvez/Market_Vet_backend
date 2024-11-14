const pool = require('../config/db');

const getProductsByType = async (req, res) => {
    const type = req.params.type === 'dogs' ? 'Perros' : req.params.type === 'cats' ? 'Gatos' : null;

    if (!type) {
        return res.status(400).json({ error: 'Tipo de producto no válido' });
    }

    try {
        const result = await pool.query('SELECT * FROM products WHERE tipo = $1', [type]);
        res.json(result.rows);
    } catch (error) {
        console.error("Error en getProductsByType:", error);
        res.status(500).json({ error: 'Error al obtener productos' });
    }
};

const getPromotions = async (req, res) => {
    try {
        const dogsPromotions = await pool.query('SELECT * FROM products WHERE tipo = $1 LIMIT 3', ['Perros']);
        const catsPromotions = await pool.query('SELECT * FROM products WHERE tipo = $1 LIMIT 3', ['Gatos']);
        
        res.json({
            perros: dogsPromotions.rows,
            gatos: catsPromotions.rows,
        });
    } catch (error) {
        console.error("Error en getPromotions:", error);
        res.status(500).json({ error: 'Error al obtener promociones' });
    }
};

module.exports = { getProductsByType, getPromotions };
/* const pool = require('../config/db');

const getProductsByType = async (req, res) => {
    const type = req.params.type === 'dogs' ? 'Perros' : req.params.type === 'cats' ? 'Gatos' : null;

    if (!type) {
        console.error("Tipo de producto no válido:", req.params.type);
        return res.status(400).json({ error: 'Tipo de producto no válido' });
    }

    try {
        const result = await pool.query('SELECT * FROM products WHERE tipo = $1', [type]);
        if (result.rows.length === 0) {
            console.warn("No se encontraron productos para el tipo:", type);
        }
        res.json(result.rows);
    } catch (error) {
        console.error("Error en getProductsByType:", error); // Muestra el error completo
        res.status(500).json({ error: 'Error al obtener productos' });
    }
};

const getPromotions = async (req, res) => {
    try {
        const dogsPromotions = await pool.query('SELECT * FROM products WHERE tipo = $1 LIMIT 3', ['Perros']);
        const catsPromotions = await pool.query('SELECT * FROM products WHERE tipo = $1 LIMIT 3', ['Gatos']);
        
        if (dogsPromotions.rows.length === 0 && catsPromotions.rows.length === 0) {
            console.warn("No se encontraron promociones para Perros o Gatos.");
        }

        res.json({
            perros: dogsPromotions.rows,
            gatos: catsPromotions.rows,
        });
    } catch (error) {
        console.error("Error en getPromotions:", error); // Muestra el error completo
        res.status(500).json({ error: 'Error al obtener promociones' });
    }
};

module.exports = { getProductsByType, getPromotions }; */









