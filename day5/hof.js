function operation(task)
{
    console.log('iam higher order function');
    let c= task()
    return c
}

let res1 = operation(function()
{
    window.alert(' i am a call back function')
})

console.log(res1);

let res2 = operation(function() {
    document.write('i am second call back function')
})

//-----------eg-2--------
//function demo(task)
//{
    //let a = task()
    //return a
//}
//console.log(demo(function(){
    //let h1 = document.getElementsByTagName("h1")
    //console.log(h1[0]);
    //h1[0].style.backgroundColor = "yellow"
//}));

//console.log(demo(function(){
    //document.title = "flipkart"
//}));

//------------------yesterday- task----
let a =Number(prompt("Enter a"))
let b = Number(prompt("Enter b"))
let operation = function (a,b,task)
{
   let c = task(a,b) 
   return c
}
let res = operation(a,b,function(a,b){
    return a+b;
})
console.log(sum);
let res1=operation(a,b,function(a,b)
{
    return a-b;
})
console.log(diff);
let res2=operation(a,b,function(a,b)
{
    return a*b;
})
console.log(prod);
let res3=operation(a,b,function(a,b)
{
    return a/b;
})
console.log(div)
//------http://vpaste.net/Fh5og----