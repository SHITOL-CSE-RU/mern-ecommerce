const express = require("express");
const { signup, signin, requireSignin } = require("../controller/auth");
const { validateRequest } = require("../validators/auth");
const router = express.Router();



router.post("/signin", signin);

router.post("/signup", validateRequest, isRequestValidated, signup);

// router.post('/profile', requireSignin, (req, res) => {
//     res.status(200).json({user: 'profile'})
// });

module.exports = router;
