console.log(window);
console.log(typeof window);

//window.prompt()
//window.alert()
//window.confirm()

console.log(document);
console.log(typeof document);

document.write('Hello');
document.write("<h1>Hello</h1>")
document.writeln("Hello-World")
document.writeln("Hello-World")
document.writeln("Hello-World")
document.writeln("Hello-World")
document.writeln("Hello-World")

//direct-access
console.log(document.URL);
console.log(document.doctype);
console.log(document.head);
console.log(document.tittle);
document.tittle = "flipkart"
console.log(document.body);

console.log(document.links);

let demo = document.links;
console.log(demo);
console.log(demo[0].setAttribute("href", "https://www.flipkart.com"));
console.log(demo[1].setAttribute("href","https://www.google.com"));
console.log(demo[2]);

for(let i=0; i<demo.length; i++)
{
   console.log(demo[1]);
   demo[i].className=demo
}
console.log(demo[3]);
demo[3].setAttribute("href", "http://www.google.com");

console.log(document.images);

let img = document.images;
console.log(img);

for(i=0; i<img.length; i++)
{
    console.log(img[i]);
    img[i].style.height="200px"
    img[i].style.width="200px"
    img[i].style.borderRadius="100%"
}
//create 3 forms target the forms  by providing css propertys
//data in the form submit button value should be printed on console

