const encode = (string) => {
  const arrayText = string.split('');
  const objEncode = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  }
  for(let i = 0; i < arrayText.length; i += 1) {
    for(let key in objEncode) {
      if(arrayText[i] === key) {
        arrayText[i] = objEncode[key];
      }
    }
  }
  const textSplit = arrayText.join('');
  return textSplit;
};
// console.log(encode('Hi there'));

module.exports = encode;