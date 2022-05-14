const express = require("express");
const { addCategory } = require('../controller/category');
const router = express.Router();



// router.post("/signin", validateSigninRequest, isRequestValidated, signin);

// router.post("/signup", validateSignupRequest, isRequestValidated, signup);

router.post('/category/create', addCategory);

module.exports = router;