import { useState, useCallback } from 'react';
import { api } from '@/lib/api';

export function useApi<T>() {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = useCallback(async (endpoint: string, options?: RequestInit) => {
    setLoading(true);
    setError(null);
    try {
      const result = await api<T>(endpoint, options);
      setData(result);
      return result;
    } catch (e) {
      setError(e as Error);
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, execute };
}