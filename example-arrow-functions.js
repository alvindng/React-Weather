// var names = ['gary','mark','jacob'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// })
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
//
// console.log(returnMe('Gary'));
//
// var person = {
//   name: 'gary',
//   greet: function () {
//     names.forEach((name) =>{
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet();


function add (a , b) {
  return a + b;

}

console.log(add(1,3));
console.log(add(9,0));

var addExpression =(a,b) => a+b ; //automatically returned after the arrow function
console.log(addExpression(2,3));

var addStatement = (a,b) => {
  return a+b
}; //statements can have multiple lines and need to be returned

console.log(addStatement(6,4));
