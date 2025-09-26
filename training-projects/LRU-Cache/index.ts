/// createLRUCache: Implement a LRU Cache Provider with get and set methods.
/**
 * A Least Recently Used (LRU) cache is a type of cache that evicts the 'least recently used items'
 * when there is a need to constrain its size.
 *
 * For this particular implementation, the size constraint is set at CacheLimits.maxItemsCount.
 * An item is considered accessed whenever `get`, or `set` methods are called with its key.
 *
 * This LRU cache will achieve size constraint by checking the cache size at the time of each new insertion.
 * In the case where the cache has reached its limit, the item least recently accessed will be removed.
 * This removal process will not happen on a separate thread but in the caller's thread,
 * thus potentially blocking their return for a cleanup when deemed necessary.
 */


  /// LRU CACHE
let exampleCache:number[]=[2,3,4,5];

export class Deque<T> {
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
    display() {
        return this.items;
    }
}

export let cacheCapacity = 0;
export let cacheD = new Deque<number>();
export let keyToValue = new Map();


export class LRUCache{
   
    initializer(c:number){
        //logic
        // cache : contains all the keys (capacity of memory)
        // Map : contains the key to value relation
        cacheCapacity = c
        console.log(`A new LRU Cache has started`)
        console.log(`the capacity is defined as ${cacheCapacity}`)
        cacheD.addFront(2)
        cacheD.addFront(3)
        cacheD.addFront(4)
        console.log(`the num of elements in cache is ${cacheD.size()}`)
        console.log(`the items are [${cacheD.display()}]`)
    }

    get(key:number){
        //logic
        // 1. If key is not present in map, return -1
        // 2. Move the key to the front of the Deque
        // 3. return the value of our key from the map
        if(key! in keyToValue){
          return -1
        }
        let removed_key = cacheD.removeBack()
        console.log(`removed key is  ${removed_key}`)
        console.log(`the items are [${cacheD.display()}]`)
        
        
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

    printMap(){
      
    }


    
}

// // Usage example
// const myDeque = new Deque<number>();
// console.log("My Deque Process")
// console.log(`Deque capacity is ${myDeque.size}`)
// myDeque.addBack(10);
// myDeque.addFront(5);
// myDeque.addBack(15);

// console.log(myDeque.removeFront()); // Output: 5
// console.log(myDeque.removeBack());  // Output: 15
// console.log(myDeque.peekFront());   // Output: 10

