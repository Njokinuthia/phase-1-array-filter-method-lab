// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(array , string){
  return array.filter(function(array){
    return array.toLowerCase() === string.toLowerCase();
  })
}



function fuzzyMatch(array,string){
  return array.filter(function(array){
    return array.slice(0,2) === string.slice(0,2);
  })
}
console.log(fuzzyMatch(drivers))

function matchName(array,string){
  return array.filter(function(array){
    return array.name === string;
  })
}