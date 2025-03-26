// src/lib/cache.ts
import { LRUCache } from 'lru-cache';

// Create a cache instance with 5 minute TTL (Time To Live)
const cache = new LRUCache({
  max: 500, // Maximum number of items
  ttl: 1000 * 60 * 5, // 5 minutes
});

// Generic cache wrapper function
export async function getCachedData<T>(
  key: string,
  fetchFn: () => Promise<T>,
  ttl: number = 1000 * 60 * 5 // Default 5 minutes
): Promise<T> {
  // Check if data exists in cache
  const cachedData = cache.get<T>(key);
  if (cachedData) {
    return cachedData;
  }

  // If not in cache, fetch fresh data
  const data = await fetchFn();
  
  // Store in cache
  cache.set(key, data, { ttl });
  
  return data;
}
