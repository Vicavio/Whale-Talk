const input = "The most important thing is to enjoy your life"; //Create variable wich contain text I want to translate

const vowels = ["a", "e", "i", "o", "u"]; // Array of vowels to extract from input var

const resultArray = []; //empty array to store the vowels from input string

for (let i = 0; i < input.length; i++) { //Create a loop to iterate through each letter of the input variable text and log the number of caracters
  //console.log(i, input[i]);
  for (let v = 0; v < vowels.length; v++) {
    //console.log(v, vowels[v]);
    if (input[i] === vowels[v]){
      resultArray.push(input[i]);
    }
  }
    if (input[i] === "e") {
      resultArray.push(input[i]);
    }
    if (input[i] === "u") {
      resultArray.push(input[i]);
    }
  }
  console.log(resultArray.join('').toUpperCase()); 
 



  
