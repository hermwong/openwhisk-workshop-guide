function main(args) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve({ message: 'Hello World' });
    }, 1000);
  });
}
