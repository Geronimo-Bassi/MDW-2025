/ Declare a number
const x: number = 30;

// Declare a string
const y: string = "40";

// This will be a string because TypeScript uses string concatenation when one operand is a string
const rest = x + y; // rest = "3040"

// Union type that allows string or number
type ning = string | number;

// Interface for a person (You used incorrect syntax with `=`, should be `interface Person { ... }`)
interface Person {
  age: number;
  name: string;
  birthdate: Date;
  isMarried? : boolean ; 
}

// `Person | null` means the variable can be a person object or null
type person = Person | null;

// Sample object creation with corrected syntax
const personsample: person = {
  age: 20,
  name: "gero",
  birthdate: new Date("2005-01-01") // Example birthdate
  
};