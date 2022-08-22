const joi = require('joi')
const jwt = require('jsonwebtoken');

const {JWT_SECRET} = process.env;

const schema = joi.object({
  username: joi.string().min(5).alphanum().required().messages({
    'string.min': '"username" length must be at least 5 characters long',
    'string.required': '"username" is required',
  }),
  password: joi.string().min(5).required().messages({
    'string.min': '"password" length must be at least 5 characters long',
    'string.required': '"password" is required',
  })
})

const validateBody = (body) => {
  return schema.validate(body);
}

module.exports = (req, res, next) => {
  const { username, password } = req.body;
  const {error} = validateBody({ username, password });
  if (error) return next(error);
  if (username === 'admin' && password !== 's3nh4S3gur4???') {
    const err = new Error('Invalid username or password');
    err.statusCode = 401;
    return next(err);
  }
  const admin = username === 'admin' && password === 's3nh4S3gur4???';
  const payload = {
    username,
    admin,
  };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' })
  res.status(200).json({token});
};
