var express = require('express');
var router = express.Router();
var house = require('../controllers/house')

/* GET home page. */
router.get('/', house.getHouses)

router.get('/:slug', house.getHouse)

router.post('/', house.createHouse)

router.delete('/:id', house.deleteHouse)

router.put('/:id', house.updateHouse)


module.exports = router;
