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
  
  //==destructuring
  const object = {
    name: 'Nantenaina',
    age: 21
  }
  const arr = ["red", "blue", "green"];
  //before ES5 :
  const name0 = object.name; //=> Nantenaina
  //console.log(name0);
  const blue = arr[1] //=> blue
  //console.log(blue);
  
  //after ES6 :
  const {name: name1, age} = object; //=>name1 = "Nantenaina" , age = 21
  //console.log(`I'm ${name1}, ${age}`);
  
  //reassign value of declared variables
  let a = 1 ;
  let b = 2;
  const ab = {a: 14, b:25};
  ({a,b} = ab);  //=> a = 14, b = 25;
  //console.log(`a = ${a}, b= ${b}`);
  
  //==spread operator
  //array spread
  const arr0 = [1,2];
  const arr1 = [3,4];
  const sa = [...arr0, ...arr1]; //=> [1,2,3,4]
  //console.log(sa);
  
  //object spread
  const person = {
    name: "Nantenaina",
    age: 21
  }
  const detail = {
    color: "black",
    nationality: "Malagasy"
  }
  const so = {...person, ...detail} //=> {name: "Nantenaina", age: 21, color: "black", nationality: "Malagasy"}
  //console.log(so);
  
  //==rest parameter
  //before ES5 :
    function arg(){
      return arguments.length;
    }
    //console.log(arg(1,'hh',7)); //=> 3
    
  //after ES6 :
    function arg1(...args){
      return args.length;
    }
    //console.log(arg1(1,'h',7)); //=> 3
    function sum(...number){
      return number.reduce((acc, num) => acc + num , 0);
    }
    //console.log(sum(1,3,6)); //=> 10
} catch (e) {
  console.error(e);
}