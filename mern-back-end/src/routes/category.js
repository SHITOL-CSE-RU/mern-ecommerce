const express = require("express");
const { addCategory, getCategories } = require('../controller/category');
const { requireSignin, adminMiddleware } = require('../common-middleware');
const router = express.Router();



// router.post("/signin", validateSigninRequest, isRequestValidated, signin);

// router.post("/signup", validateSignupRequest, isRequestValidated, signup);

router.post('/category/create', requireSignin, adminMiddleware, addCategory);

router.get('/category/getcategory', getCategories);

module.exports = router;