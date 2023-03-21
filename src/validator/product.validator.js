import Joi from "joi";
import withJoi from "next-joi";
import validator from './default.validator';

const create = validator ({
   
    body:Joi.object({
        firstName:Joi.string().required(),
        lastName:Joi.string().required(),
        email:Joi.string().required(),
    })
})

const ProductValidator = {
    create
}

export {ProductValidator}