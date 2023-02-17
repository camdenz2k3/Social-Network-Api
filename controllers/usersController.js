const { User, Thought } = require('../models')

module.exports = {
  create: async function(req, res) {
    try {
      const result = await User.create(req.body)
      res.json(result)
    } catch(err) {
      res.status(500).json(err)
    }
  },
  findAll: async function(req, res) {
    try {
      const users = await User.find()
      res.json(users)
    } catch(err) {
      res.status(500).json(err)
    }
  },
  findOne: async function(req, res) {
    try {
      const user = await User.findById(req.params.id)
      res.json(user)
    } catch(err) {
      res.status(500).json(err)
    }
  },
  update: async function(req, res) {
    try {
      const result = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
      res.json(result)
    } catch(err) {
      res.status(500).json(err)
    }
  },
  delete: async function(req, res) {
    try {
      const user = await User.findById(req.params.id)
      const result = await User.findByIdAndDelete(req.params.id)
      await Thought.deleteMany({username: user.username})
      res.json(result)
    } catch(err) {
      res.status(500).json(err)
    }
  },
  addFriend: async function(req, res) {
    try {
      const result = await User.findByIdAndUpdate(req.params.userId, { $push: { friends: req.params.friendId }}, { new: true })
      res.json(result)
    } catch(err) {
      res.status(500).json(err)
    }
  },
  deleteFriend: async function(req, res) {
    try {
      const result = await User.findByIdAndUpdate(req.params.userId, { $pull: { friends: req.params.friendId }}, { new: true })
      res.json(result)
    } catch(err) {
      res.status(500).json(err)
    }
  },
}