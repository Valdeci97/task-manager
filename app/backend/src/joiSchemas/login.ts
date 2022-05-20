import joi from 'joi';

const FIELDS = '400/All fields must be filled';
const INCORRECT = '401/Incorrect email or password';

export const emailSchema = joi.object({
  email: joi.string().email().required().messages({
    'any.required': FIELDS,
    'string.empty': FIELDS,
    'string.email': INCORRECT,
  }),
});

export const passwordSchema = joi.object({
  'any.required': FIELDS,
  'string.empty': FIELDS,
  'string.min': INCORRECT,
});
