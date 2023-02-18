const Joi = require('joi');
const { validateOptions } = require('./common');


function validateTodoPost(body) {
     const schema = Joi.object({
          task: Joi.string().required().min(3).max(50),
          isCompleted: Joi.boolean().required()
     });
     return schema.validate(body, validateOptions);
}

function validateTodoPut(body) {
     const schema = Joi.object({
          id: Joi.number().required(),
          task: Joi.string().required().min(3).max(50),
          isCompleted: Joi.boolean().required()
     });
     return schema.validate(body, validateOptions);
}


module.exports.validateTodoPost = validateTodoPost;
module.exports.validateTodoPut = validateTodoPut;