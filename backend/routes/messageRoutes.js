const express = require('express');
const router = express.Router();
const { sendMessage, getMessages, deleteMessage, markAsRead, getMessageStats } = require('../controllers/messageController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', sendMessage);
router.get('/', protect, getMessages);
router.get('/stats', protect, getMessageStats);
router.delete('/:id', protect, deleteMessage);
router.put('/:id/read', protect, markAsRead);

module.exports = router;
