const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }


// returning same results, but test is not passing 

const titleCased = tutorials.map(function(strings){
  let firstCharactor=strings.charAt(0).toUpperCase()
  let fullString =firstCharactor+strings.slice(1,strings.length)
  return fullString;
}); 
console.log(titleCased);
