const router = require('express').Router();
module.exports = router;

const users = require('./users')
const locations = require('./locations')
const places = require('./places')
const chats = require('./chats')
const conversations = require('./conversations')
const block = require('./block');

router.use('/users', users);
router.use('/locations', locations);
router.use('/places', places);
router.use('/chats', chats);
router.use('/conversations', conversations);
router.use('/block', block);