/// LRU CACHE
let exampleCache:number[]=[2,3,4,5];

class Deque<T> {
    private items: T[] = [];

    addFront(element: T): void {
        this.items.unshift(element); // Add to the beginning of the array
    }

    addBack(element: T): void {
        this.items.push(element); // Add to the end of the array
    }

    removeFront(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.shift(); // Remove from the beginning of the array
    }

    removeBack(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.pop(); // Remove from the end of the array
    }

    peekFront(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[0];
    }

    peekBack(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }
}


class LRUCache{
    initializer(c:number){
        //logic
        // cache : contains all the keys (capacity of memory)
        const cache = new Deque<number>();
        // Map : contains the key to value relation
        const keyToValue = new Map()
    }

    get(key:number){
        //logic
        // 1. If key is not present in map, return -1
        // 2. Move the key to the front of the Deque
        // 3. return the value of our key from the map
        
        
    }

    put(key:number,value:string){
        //logic

        // if Key is NOT in the Map
        
        // if it reached capacity
        // 1. pop last element of the deque
        // 2. remove the last element we got from the deque of the map
        // 3. set the value of the key  to in our map
        // 4. push the key to the front of the deque
        
        // if we still dont reach the capacity
        // 1. Set the value of the key to our map
        // 2. Push the key to the front of our deque

        // if Key is in the Map!!!
        
        // 1. Remove the key from the deque.
        // 2. Set the value of the key to in our map.
        // 3. Push the key to the front of our deque 
    }


    
}

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