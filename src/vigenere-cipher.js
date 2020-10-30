const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  }

  checkParam(code,key) {
    if(!code || !key) throw new Error()
  }

  getCipher(code,key,isCipher = true) {
    let message = [];
    let cipherKey = [];
    let cipher = [];
    code = code.toUpperCase();
    key = key.toUpperCase();
    for (let i = 0, j = 0; i <code.length; i++) {
      if (!key[j]) j = 0;
      if(this.alphabet.includes(code[i])) {
        message[i] = this.alphabet.indexOf(code[i]);
        cipherKey[j] = this.alphabet.indexOf(key[j]);
        cipher[i] = isCipher ? this.alphabet[((message[i] + cipherKey[j]) % 26)] :  this.alphabet[((message[i]) - cipherKey[j] + 26 ) % 26];
        j++;
      } else {
        cipher[i] = code[i];
      }
    }
    return this.isDirect ? cipher.join('') : cipher.reverse().join('');
  }

  encrypt(code,key) {
    this.checkParam(code,key);
    let result = this.getCipher(code,key);
    return result;
  }
  decrypt(code,key) {
    this.checkParam(code,key);
    let result = this.getCipher(code,key,false);
    return result;
  }
}

module.exports = VigenereCipheringMachine;
