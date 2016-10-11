'use strict';

module.exports.securedGreeter = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({ message: "You're in! Hello from the greeter!" })
  };

  context.succeed(response);
};
