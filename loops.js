function forLoop(array) {
  for ([var i = 0]; [i < 25]; [i++]) {
    array[i] =  "I am ${i} strange loop${i === 0 ? '' : 's'}."

  return array
}}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }
  return "done"
}

function doWhileLoop(array) {
  do {
    function maybeTrue() {
      return Math.random() >= 0.5
    }
    var a = 0;
    delete array[a];
    a = a ++ 1;
  } while (array.length > 0 && maybeTrue());
}
