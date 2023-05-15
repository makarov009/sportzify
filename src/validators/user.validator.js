const { body } = require("express-validator");

/**
 * Validates the request body for the profileUpdate route.
 * @name profileUpdate
 * @memberof module:userValidator
 * @see profileUpdate
 */

exports.profileUpdate = [
  body("username")
    .optional({ nullable: true })
    .notEmpty()
    .withMessage("Username field can not be empty."),

  body("firstname")
    .optional({ nullable: true })
    .notEmpty()
    .withMessage("First name field can not be empty."),

  body("lastname")
    .optional({ nullable: true })
    .notEmpty()
    .withMessage("Last name field can not be empty."),

  body("age")
    .optional({ nullable: true })
    .isInt({ min: 13 })
    .withMessage("Age must be a whole number and at least 13 years old."),

  body("email")
    .optional({ nullable: true })
    .isEmail()
    .withMessage("Invalid email address."),

  body("password").notEmpty().withMessage("Password Required"),
];


/**
 * Validates the request body for the passwordUpdate route.
 * @name passwordUpdate
 * @memberof module:userValidator
 * @see passwordUpdate
 */
exports.passwordUpdate = [
  body("oldPassword").notEmpty().withMessage("Old password required."),

  body("newPassword")
    .trim()
    .notEmpty()
    .withMessage("New password required.")
    .isStrongPassword()
    .withMessage(
      "Password should have at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character."
    ),
];

/**
 * Validates the request body for the createBlog and updateBlog routes.
 * @module userValidator
 */