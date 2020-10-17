import { useState, useEffect } from 'react';

export const useDebounce = (term, delay) => {
  const [debouncedTerm, setDebouncedTerm] = useState(term);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebouncedTerm(term);
    }, delay);

    return () => {
      clearTimeout(debounce)
    }
  }, [term, delay]);

  return debouncedTerm;
};