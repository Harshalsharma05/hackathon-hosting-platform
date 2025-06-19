import { validationResult } from 'express-validator';
import { ApiError } from '../utils/apiError.js';

export const validateRequest = (req, res, next) => {
    
  const errors = validationResult(req);

  if (!errors.isEmpty()) {

    return res
    .status(400)
    .json(
      new ApiError(
        400,
        'Validation Error',
        errors.array().map((error) => ({
          param: error.param,
          msg: error.msg,
          value: error.value,
        }))
      )
    );
  }
  next();
}