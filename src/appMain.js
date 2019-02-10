import moment from 'moment';

/**
 * Greetings functio to greet the caller
 */
const greetings = function() {
  return `Hello, today is ${moment()}, how is your day so far?`;
};

module.exports = {
  greetings,
};
