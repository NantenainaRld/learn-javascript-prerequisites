try {
  //==variable
  //before ES5
  var test = 5;
  test = 12;
  //console.log(tesES5
  //after ES6
  let x = 5;
  x = 12;
  //console.log(x);

  const PI = 3.14;
  //error
  //PI = 5;

  //==arrow function
  //before ES5
  function add(a, b) {
    return a + b;
  }
  const result = add(1, 3);
  //console.log(result);

  //after ES6
  const test2 = (a, b) => {
    return a + b;
  }
  //console.log(test2(1, 3));

  //==templatefunctES5
  const name = 'Nantenaina';
  //before ES5
  const message = "I'm " + name;
  //console.log(message);

  //after ES6
  const test3 = `I'm ${name}`;
  //console.log(test3);
} catch (e) {
  console.error(e);
}