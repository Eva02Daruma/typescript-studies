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
 *
 * Use the provided com.speechify.LRUCacheProviderTest in `src/test/java/LruCacheTest.java` to validate your
 * implementation.
 *
 * You may:
 *  - Read online API references for Java standard library or JVM collections.
 * You must not:
 *  - Read guides about how to code an LRU cache.
 */

export class LruCache<T> {

  private values: Map<string, T> = new Map<string, T>();
  private maxEntries: number = 20;

  public get(key: string): T {
    const hasKey = this.values.has(key);
    let entry: T;
    if (hasKey) {
      // peek the entry, re-insert for LRU strategy
      entry = this.values.get(key);
      this.values.delete(key);
      this.values.set(key, entry);
    }

    return entry;
  }

  public put(key: string, value: T) {

    if (this.values.size >= this.maxEntries) {
      // least-recently used cache eviction strategy
      const keyToDelete = this.values.keys().next().value;

      this.values.delete(keyToDelete);
    }

    this.values.set(key, value);
  }

}


