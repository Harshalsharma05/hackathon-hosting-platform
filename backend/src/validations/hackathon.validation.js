import { body } from 'express-validator';

export const createHackathonValidator = [
  body('title')
    .notEmpty().withMessage('Hackathon title is required.')
    .isString().withMessage('Title must be a string.')
    .trim(),

  body('description')
    .notEmpty().withMessage('Description is required.')
    .isString().withMessage('Description must be a string.')
    .trim(),

  body('coverImageUrl')
    .optional()
    .isURL().withMessage('Cover image must be a valid URL.'),

  body('startDate')
    .notEmpty().withMessage('Start date is required.')
    .isISO8601().withMessage('Start date must be a valid date.'),

  body('endDate')
    .notEmpty().withMessage('End date is required.')
    .isISO8601().withMessage('End date must be a valid date.'),

  body('organizer')
    .notEmpty().withMessage('Organizer ID is required.')
    .isMongoId().withMessage('Organizer ID must be a valid Mongo ID.'),

  body('stages')
    .optional()
    .isArray().withMessage('Stages must be an array of Mongo IDs.')
    .custom((arr) => arr.every(id => typeof id === 'string')).withMessage('Each stage ID must be a string.'),

  body('rubric')
    .optional()
    .isMongoId().withMessage('Rubric ID must be a valid Mongo ID.'),

  body('problemStatements')
    .optional()
    .isArray().withMessage('Problem statements must be an array of Mongo IDs.')
    .custom((arr) => arr.every(id => typeof id === 'string')).withMessage('Each problem statement ID must be a string.'),

  body('judges')
    .optional()
    .isArray().withMessage('Judges must be an array of Mongo IDs.')
    .custom((arr) => arr.every(id => typeof id === 'string')).withMessage('Each judge ID must be a string.'),

  body('participants')
    .optional()
    .isArray().withMessage('Participants must be an array of Mongo IDs.')
    .custom((arr) => arr.every(id => typeof id === 'string')).withMessage('Each participant ID must be a string.'),

  body('announcements')
    .optional()
    .isArray().withMessage('Announcements must be an array of Mongo IDs.')
    .custom((arr) => arr.every(id => typeof id === 'string')).withMessage('Each announcement ID must be a string.'),

  body('isPublished')
    .optional()
    .isBoolean().withMessage('isPublished must be true or false.'),
];
