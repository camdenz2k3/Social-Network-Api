const router = require('express').Router()
const userRoutes = require('./users')
const thoughtRoutes = require('./thoughts')

router.use('/api/users', userRoutes)
router.use('/api/thoughts', thoughtRoutes)

module.exports = router