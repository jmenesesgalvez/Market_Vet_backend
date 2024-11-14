const Cart = require('../models/Cart');

exports.addToCart = async (req, res) => {
  const { user_id, product_id, cantidad } = req.body;
  try {
    const item = await Cart.addItem(user_id, product_id, cantidad);
    res.json({ message: 'Producto agregado al carrito', item });
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar producto al carrito' });
  }
};

exports.getCartItems = async (req, res) => {
  const { user_id } = req.params;
  try {
    const items = await Cart.getItems(user_id);
    res.json({ items });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos del carrito' });
  }
};
