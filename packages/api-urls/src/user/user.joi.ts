import * as Joi from 'joi';

const first_name = Joi.string();
const last_name = Joi.string();
const email = Joi.string().email({ tlds: { allow: false } });
const password = Joi.string();
const active = Joi.boolean();
const nickname = Joi.string();
const address = Joi.string();
const phoneNumber = Joi.string();

export const createUserValidation = Joi.object().keys({
  first_name: first_name.required(),
  last_name: last_name.required(),
  email: email.required(),
  password: password.required(),
  nickname: nickname.optional(),
  address: address.optional(),
  phoneNumber: phoneNumber.optional(),
});

export const updateUserValidation = Joi.object().keys({
  first_name: first_name.optional(),
  last_name: last_name.optional(),
  email: email.optional(),
  active: active.optional(),
});

export const updateUserPassValidation = Joi.object().keys({
  password: password.required(),
});
