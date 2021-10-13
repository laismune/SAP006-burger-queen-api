/* eslint-disable no-console */

const getAllProducts = (req, res) => {
  console.log('função getAllProducts');
  res.send('função getAllProducts');
};

const getProduct = (req, res) => {
  console.log('função getProduct');
  res.send('função getProducts');
};

const postAllProducts = (req, res) => {
  console.log('função postAllProducts');
  res.send('função postAllProducts');
};

const putProduct = (req, res) => {
  console.log('função putProduct');
  res.send('função putProduct');
};

const deleteProduct = (req, res) => {
  console.log('função deleteProduct');
  res.send('função deleteProduct');
};

module.exports = {
  getAllProducts, getProduct, postAllProducts, putProduct, deleteProduct,
};
