module.exports = function check(str, bracketsConfig) {
  br = bracketsConfig.flat();
  let stack = [];
  for (i of str) {
    if (br.indexOf(stack.slice(-1).toString()) + 1 === br.lastIndexOf(i)) {
      stack.pop();
    } else {
      stack.push(i);
    }
  }
  return stack.length === 0;
}


