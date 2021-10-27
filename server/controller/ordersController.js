const db = require('../db/models');

const { Products } = db;

const getAllOrders = async (req, res) => {
  const getOrders = await db.Orders.findAll({
    include: [
      {
        Products, as: 'Products', attributes: ['id', 'name', 'price', 'flavor', 'complement', 'type', 'sub_type'], through: { attributes: ['qtd'], as: 'details' },
      }],
  });
  try {
    return res.status(200).json({ getOrders });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getOrder = async (req, res) => {
  try {
    const { postId } = req.params;
    const getOrders = await db.Orders.findOne({
      where: { id: postId },
      include: [
        {
          Products, as: 'Products', attributes: ['id', 'name', 'price', 'flavor', 'complement', 'type', 'sub_type'], through: { attributes: ['qtd'], as: 'details' },
        }],
    });
    if (getOrder === null) {
      return res.status(200).json({ message: 'Pedido inexistente' });
    }
    return res.status(200).json(getOrders);
  } catch (error) {
    next(error);
  }
};

const postOrder = async (req, res) => {
  try {
    const post = await db.Orders.create(req.body);
    return res.status(201).json({
      post,
    });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
};

const putOrder = (req, res) => {
  console.log('função putOrder');
  res.send('função putOrder');
};

const deleteOrder = (req, res) => {
  console.log('função deleteOrder');
  res.send('função deleteOrder');
};

module.exports = {
  getAllOrders, getOrder, postOrder, putOrder, deleteOrder,
};
