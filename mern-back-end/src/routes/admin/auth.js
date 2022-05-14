const express = require("express");
const { signup, signin, requireSignin } = require("../../controller/admin/auth");
const { validateRequest, isRequestValidated } = require("../../validators/auth");
const router = express.Router();


router.post("/admin/signin", signin);

router.post("/admin/signup", validateRequest, isRequestValidated, signup);



module.exports = router;
