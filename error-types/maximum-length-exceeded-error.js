const ValidationError = require('./validation-error');

// Your code here
class MaximumLengthExceededError extends ValidationError {
  constructor(length = null) {
    super(length);

    if(Error.captureStackTrace) {
      Error.captureStackTrace(this, MaximumLengthExceededError);
    }

    this.name = 'MaximumLengthExceededError';
    this.message = (length) ? `Maximum length exceeded by ${length}` : `Maximum length exceeded`;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}
