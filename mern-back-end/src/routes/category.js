const express = require("express");
const { addCategory, getCategories } = require('../controller/category');
const router = express.Router();



// router.post("/signin", validateSigninRequest, isRequestValidated, signin);

// router.post("/signup", validateSignupRequest, isRequestValidated, signup);

router.post('/category/create', addCategory);

router.get('/category/getcategory', getCategories);

module.exports = router;