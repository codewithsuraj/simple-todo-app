const formatErrorMessage = (error) => error.details[0].message;

// function formatErrorMessage(error) {
//      return error.details[0].message;
// }

const validateOptions = {
     errors: {
          wrap: {
               label: ''
          }
     }
};

module.exports.validateOptions = validateOptions;
module.exports.formatErrorMessage = formatErrorMessage;
