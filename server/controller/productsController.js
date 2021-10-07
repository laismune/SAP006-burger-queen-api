/* eslint-disable no-console */

const getAllProducts = (req, res) => {
  console.log('função getAllProducts');
  res.send('Request getExample feita');
};

const getProduct = (req, res) => {
  console.log('função getProduct');
  res.send('Request getOtherExample feita');
};

const postAllProducts = (req, res) => {
  console.log('função postAllProducts');
  res.send('Request getOtherExample feita');
};

const putProduct = (req, res) => {
  console.log('função putProduct');
  res.send('Request getOtherExample feita');
};

const deleteProduct = (req, res) => {
  console.log('função deleteProduct');
  res.send('Request getOtherExample feita');
};

module.exports = {
  getAllProducts, getProduct, postAllProducts, putProduct, deleteProduct,
};
