/* eslint-disable no-console */

const getAllUsers = (req, res) => {
  console.log('função getAllUsers');
  res.send('Request getExample feita');
};

const getUser = (req, res) => {
  console.log('função getUser');
  res.send('Request getOtherExample feita');
};

const postUser = (req, res) => {
  console.log('função postUser');
  res.send('Request getOtherExample feita');
};

const putUser = (req, res) => {
  console.log('função putUser');
  res.send('Request getOtherExample feita');
};

const deleteUser = (req, res) => {
  console.log('função deleteUser');
  res.send('Request getOtherExample feita');
};

module.exports = {
  getAllUsers, getUser, postUser, putUser, deleteUser,
};
