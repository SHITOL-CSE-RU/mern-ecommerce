const { check, validationResult } = require("express-validator");

exports.validateSignupRequest = [
    check("firstName").notEmpty().withMessage("First name is required"),
    check("lastName").notEmpty().withMessage("Last name is required"),
    check("email").isEmail().withMessage("Valid Email is required"),
    check("password")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 character long"),
];

exports.validateSigninRequest = [
    check("email").isEmail().withMessage("Valid Email is required"),
    check("password")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 character long"),
];

exports.isRequestValidated = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.array().length > 0) {
        return res.status(400).json({ errors: errors.array()[0].msg });
    }
    next();
}