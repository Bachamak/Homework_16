function generateKey(len, charSet) {
  charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var randomString = '';
  for (var i = 0; i < len; i++) {
      var randomPozition = Math.floor(Math.random() * charSet.length);
      randomString += charSet.substring(randomPozition, randomPozition + 1);
  }
  return randomString;
}
var randomValue = generateKey(16, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789');
console.log(randomValue);