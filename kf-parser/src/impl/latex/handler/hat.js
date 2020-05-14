define(function (require) {
  return function (info, processedStack, unprocessedStack) {
    var exponent = unprocessedStack.shift();

    info.operand = [exponent];

    delete info.handler;

    return info;
  };
});
