import { useEffect, useState, useCallback } from "react";

interface Status<T> {
  loading: boolean;
  error: string | null;
  data: T | null;
}

export const URI = "http://localhost:8000";

const DEFAULT_FETCH_OPTIONS: RequestInit = {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

async function fetchOneEndpoint<T>(
  url: string,
  options: RequestInit
): Promise<T> {
  const response = await fetch(`${URI}${url}`, options);
  if (!response.ok) throw new Error("An error has occurred");
  return response.json();
}

/**
 * Custom hook to fetch data from an API endpoint.
 * @param {string | string[]} endpoint - Single URL or an array of URLs.
 * @param {RequestInit} options - Optional fetch options.
 */
type EndpointMap<T> = {
  [K in keyof T]: string;
};

export const useFetch = <T,>(
  endpoints: EndpointMap<T>,
  options: RequestInit = DEFAULT_FETCH_OPTIONS
) => {
  const [status, setStatus] = useState<Status<T>>({
    loading: true,
    error: null,
    data: null,
  });

  const fetchData = useCallback(async () => {
    setStatus({ loading: true, error: null, data: null });

    try {
      const keys = Object.keys(endpoints) as (keyof T)[];
      const results = await Promise.all(
        keys.map((key) => fetchOneEndpoint<T[keyof T]>(endpoints[key], options))
      );

      const data = keys.reduce((acc, key, i) => {
        acc[key] = results[i];
        return acc;
      }, {} as T);

      setStatus({ loading: false, error: null, data });
    } catch (error) {
      setStatus({
        loading: false,
        error: (error as Error).message,
        data: null,
      });
    }
  }, [endpoints, options]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { ...status, fetchData };
};
