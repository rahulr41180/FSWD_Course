
// Typed For Different Typed of Variable Value :

// JS Code
// Typed assigned at runtime time based on value typed.
// const num = 10;
// const str = "Hello, World";
// let value = 100;
// value = "Something" // this is okay in JS code

// TS Code
// Typed assigned at compiled time

const num: number = 100;
const str: string = "Hello World";
let value: number = 100;
// value = "Something" // This is not okay in TS code means we can't assign the different typed value to different typed variable.