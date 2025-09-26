import { Deque, LRUCache } from "../LRU-Cache";

console.log("Hola Mundo")

// Probar Aqui los codigos de LRU CACHE , PARSE SSML

// LRU CACHE EXCERSISE
console.log("LRU CACHE EXCERSISE")

// Usage example
const myDeque = new Deque<number>();
console.log("My Deque Process")
console.log(`Deque capacity is ${myDeque.size}`)
myDeque.addBack(10);
myDeque.addFront(5);
myDeque.addBack(15);

console.log(myDeque.removeFront()); // Output: 5
console.log(myDeque.removeBack());  // Output: 15
console.log(myDeque.peekFront());   // Output: 10

