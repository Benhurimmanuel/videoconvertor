const express = require('express');
const {fileConvertorController}=require('../controller/index');

const router = express.Router();

router.route('/convert').post(fileConvertorController);

module.exports = router