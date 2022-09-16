import joi from '@hapi/joi';

const create = joi.object({
  name: joi.string().required(),
  description: joi.string().required(),
  price: joi.number().required(),
  createdAt: joi.date(),
  updatedAt: joi.date(),
});

export { create };