const Message = require('../models/Message');

exports.sendMessage = async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Please fill all fields' });
  }

  try {
    const newMessage = await Message.create({ name, email, subject, message });
    res.status(201).json({ message: 'Message sent successfully', data: newMessage });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteMessage = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    if (message) {
      await message.deleteOne();
      res.json({ message: 'Message removed' });
    } else {
      res.status(404).json({ message: 'Message not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.markAsRead = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    if (message) {
      message.isRead = true;
      await message.save();
      res.json({ message: 'Message marked as read' });
    } else {
      res.status(404).json({ message: 'Message not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getMessageStats = async (req, res) => {
  try {
    const total = await Message.countDocuments();
    const unread = await Message.countDocuments({ isRead: false });
    const read = total - unread;
    res.json({ total, read, unread });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
