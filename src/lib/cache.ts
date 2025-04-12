// src/lib/cache.ts
import { LRUCache } from 'lru-cache';

// Detect development mode
const DEV_MODE = process.env.NODE_ENV !== 'production';

// Use much longer TTL in development mode to reduce filesystem operations
const DEFAULT_TTL = DEV_MODE 
  ? 1000 * 60 * 60     // 1 hour in dev
  : 1000 * 60 * 60 * 2; // 2 hours in production

// Create a type-safe cache instance (string keys, any values)
const cache = new LRUCache<string, unknown>({
  max: 1000, // Increased from 500 to 1000 for more items
  ttl: DEFAULT_TTL,
  updateAgeOnGet: true, // Reset TTL when item is accessed
});

// Generic cache wrapper function
export async function getCachedData<T>(
  key: string,
  fetchFn: () => Promise<T>,
  ttl: number = DEFAULT_TTL // Use the environment-specific default TTL
): Promise<T> {
  // Check if data exists in cache
  const cachedData = cache.get(key) as T | undefined;
  if (cachedData !== undefined) {
    return cachedData;
  }

  // If not in cache, fetch fresh data
  const data = await fetchFn();
  
  // Store in cache
  cache.set(key, data);
  
  return data;
}
