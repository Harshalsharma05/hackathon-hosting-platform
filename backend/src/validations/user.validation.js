import { body } from 'express-validator';

export const signupValidator = [
  body('name')
    .notEmpty().withMessage('Name is required.')
    .isString().withMessage('Name must be a string.')
    .trim(),

  body('email')
    .notEmpty().withMessage('Email is required.')
    .isEmail().withMessage('Must be a valid email address.')
    .normalizeEmail(),

  body('password')
    .notEmpty().withMessage('Password is required.')
    .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long.'),

  body('role')
    .optional()
    .isIn(['superadmin', 'organizer', 'participant', 'judge'])
    .withMessage('Invalid role.'),

  body('avatar')
    .optional()
    .isURL().withMessage('Avatar must be a valid URL.'),
];
