const Router = require('express')
const {login, register, logout, profile} = require('../../controllers/authentication/authController')
const router = Router();
const authrequired = require('../../middlewares/validateToken')

router.post('/register', register);
router.post('/login', login);

router.post('/logout', logout)

router.get('/profile', authrequired, profile)

module.exports = router