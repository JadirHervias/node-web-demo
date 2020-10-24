const randomId = (length = 8) => {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz'.split(
    ''
  );

  if (!length) {
    length = Math.floor(Math.random() * chars.length);
  }

  let randomString = '';
  for (var i = 0; i < length; i++) {
    randomString += chars[Math.floor(Math.random() * chars.length)];
  }
  return randomString;
};

module.exports = randomId;
