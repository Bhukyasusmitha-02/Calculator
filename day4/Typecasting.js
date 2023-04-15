// implicit type-casting

console.log(5 + 5);
console.log(5 + '5');
console.log(5 +'a');
console.log(5 - 5);
console.log(5 - '5');
console.log(5 - 'a');
console.log(typeof NaN);
console.log((NaN) ? true : false);
console.log((undefined) ? true : false);
console.log((null) ? true : false);
console.log((0) ? true : false);
console.log((-10) ? true : false);

//explicit type-casting

console.log(5 + Number('5'));//10
console.log(String(5) + 5);//55
console.log(Boolean(10));
console.log(Boolean(0));

console.log(Number.parseInt(24.5));
console.log(Number.parseFloat(24.5));
console.log(Number.isFinite(5));
console.log(Number.isFinite(5n));
console.log(Number.isInteger(5.5));

//function-declaration-statement

console.log(demo);
console.log(demo());

 
function demo()
{
      // console.log('Hello');
      console.log('hello world');
      return 'hello'
}
console.log(demo);
console.log(demo());
//write function to perform addition of 2 numbers but input should be given by the end users.

function Add()
{
      console.log(a=4);
      console.log(b=5);
      return c=a+b;
}
console.log(Add());

//function sum(a,b)
//{
     // let c = a+b;
     // return c
//}
//console.log(sum(10,20));
//function sum()
//{
//let a = Number(prompt("enter a"));
//let b = Number(prompt("enter b"));
//let c = a+b;
//return c
//}
//console.log(sum());
function add(a,b)
{
      return a+b;
}
console.log(add(Number(prompt()),Number(prompt())));


