import { useState, useEffect, useCallback } from "react";

export const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const jsonData = (await response.json()) as T;
      setData(jsonData);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  }, [url]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data: [data, error, isLoading] as const,
    refetch: fetchData,
  };
};
