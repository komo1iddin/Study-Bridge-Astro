import { getContext, setContext } from 'svelte';

export function createContext(key) {
  return [
    // Get value from context
    () => getContext(key),
    // Set value in context
    (value) => setContext(key, value)
  ];
} 