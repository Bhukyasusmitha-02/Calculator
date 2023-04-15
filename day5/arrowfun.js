implicit return

let a=()=>console.log('hello');
console.log(a);
console.log(a());

//explicit arrow fun

let demo = () => {return 'helloworld'}
console.log(demo);
console.log(demo());

// write a function perform addition of 2 numbers by using implicit arrow function
let sum=(a,b)=>console.log(a+b);
console.log(sum(10,20));

//hof and call backusing arrow fun

let hof = (cb) => {
    let a = cb
    return a;
}
console.log(hof(() => {
  return'iam cb-fun1'
}));
// write a hof and call back by using arrow function to perform addition of 3numbers,multiplication of 3 numbers using arrow functions
let operations = (a,b,c,task)=>{
    let d=task(a,b,c)
    return d;
}
console.log(operation(10,10,10(a,b,c) =>
{
    return a+b+c;
}));
//write a hof and call-back fun to generate current date and time by using arrow function
let demo = document.getElementsByTagName('button')
console.log(demo);
console.log(demo[0]);

let date = demo[0].onclick = (task1) =>
{
    document.body.innerHTML += '$(task1()}'
    return task1()
}
console.log(date() => {
    let d = new Date()
    return d
}));

