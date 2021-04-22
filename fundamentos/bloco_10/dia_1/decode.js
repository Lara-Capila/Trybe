const decode = (string) => {
    const arrayText = string.split('');
    const objEncode = {
      1: 'a',
      2: 'e',
      3: 'i',
      4: 'o',
      5: 'u'
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
  // console.log(encode('H3 th2r2'));

  module.exports = decode;