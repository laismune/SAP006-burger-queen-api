const { Router } = require('express');
const {
  getAllUsers, getUser, postUser, putUser, deleteUser,
} = require('../controller/usersController');

const router = Router();

router.get('/users', getAllUsers);
router.post('/users', postUser);

router.get('/users/:userid', getUser);
router.put('/users/:userid', putUser);
router.delete('/users/:userid', deleteUser);

module.exports = router;
