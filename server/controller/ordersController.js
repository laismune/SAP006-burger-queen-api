/* eslint-disable no-console */

const getAllOrders = (req, res) => {
  console.log('função getAllOrders');
  res.send('função getAllOrders');
};

const getOrder = (req, res) => {
  console.log('função getOrder');
  res.send('função getOrder');
};

const postOrder = (req, res) => {
  console.log('função postAllOrders');
  res.send('função postAllOrders');
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
