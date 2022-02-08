module.exports = function check(str, bracketsConfig) {
  br = bracketsConfig.flat();
  let stack = [];
  for (i of str) {
    if (stack.length === 0) {
      stack.push(i);
    } else if (br.indexOf(i) % 2 === 0 && br.indexOf(i) === br.lastIndexOf(i)) {
      stack.push(i);
    } else if (br.indexOf(i) % 2 === 0 && br.indexOf(i) + 1 === br.lastIndexOf(i) && stack.slice(-1).toString() !== i) {
      stack.push(i);
    } else if (br.lastIndexOf(i) % 2 === 1 && br.indexOf(stack.slice(-1).toString()) + 1 !== br.lastIndexOf(i)) {
      stack.push(i);
    } else {
      stack.pop();
    }
  }
  return stack.length === 0;
}


