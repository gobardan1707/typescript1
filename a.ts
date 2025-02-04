const z: number = 1;
console.log(z);

function greet(name: string) {
  // in this case we also assig any ore else we have to specify the type
  // if i have multiple arguments then each argument eill have a type separatly

  console.log(`hello ${name}`);
}
greet("ramu");

function addsum(a: number, b: number): number {
  // the function return also need to have a type it a good practice to specify the return type
  let c = a + b;
  return c;
}
addsum(1, 5);
console.log(1, 6);

function legal(age: number) {
  if (age > 18) {
    return true;
  }
}

//passing a function inside a function

function redflag(fn: () => void) {
  setTimeout(fn, 100);
}
redflag(function () {
  console.log("hi there"); // what ever the argument function return the type of the main fumction is also same tihs is how it works
});

// we always have to keep the .js file and the .ts files in th e separete folder so the typescript fiels will save inside the dist golder or buil folder
