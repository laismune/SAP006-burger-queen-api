/* eslint-disable no-console */

const getAllUsers = (req, res) => {
  console.log('função getAllUsers');
  res.send('função getAllUsers');
};

const getUser = (req, res) => {
  console.log('função getUser');
  res.send('função getUser');
};

const postUser = (req, res) => {
  console.log('função postUser');
  res.send('função postUser');
};

const putUser = (req, res) => {
  console.log('função putUser');
  res.send('função putUser');
};

const deleteUser = (req, res) => {
  console.log('função deleteUser');
  res.send('função deleteUser');
};

module.exports = {
  getAllUsers, getUser, postUser, putUser, deleteUser,
};
