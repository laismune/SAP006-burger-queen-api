/* eslint-disable no-console */

const getAllOrders = (req, res) => {
  console.log('função getAllOrders');
  res.send('Request getExample feita');
};

const getOrder = (req, res) => {
  console.log('função getOrder');
  res.send('Request getOtherExample feita');
};

const postOrder = (req, res) => {
  console.log('função postAllOrders');
  res.send('Request getOtherExample feita');
};

const putOrder = (req, res) => {
  console.log('função putOrder');
  res.send('Request getOtherExample feita');
};

const deleteOrder = (req, res) => {
  console.log('função deleteOrder');
  res.send('Request getOtherExample feita');
};

module.exports = {
  getAllOrders, getOrder, postOrder, putOrder, deleteOrder,
};
