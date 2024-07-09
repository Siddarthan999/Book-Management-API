const express = require('express');
const router = express.Router();


const { getAllBookData, addBookData, updateBookData, deleteBookData } = require('../controllers/bookController')

router.get('/getBookData', getAllBookData);
router.post('/addBookData', addBookData);
router.put('/updateBookData', updateBookData);
router.delete('/deleteBookData', deleteBookData);

module.exports = router