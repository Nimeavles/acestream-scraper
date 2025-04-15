import { useEffect, useState, useCallback } from "react";

interface Status<T> {
  loading: boolean;
  error: string | null;
  data: T | null;
}

const URI = "http://localhost:8000";

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
export const useFetch = <T,>(
  endpoint: string | string[],
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
      if (typeof endpoint === "string") {
        // Fetch a single endpoint
        const data = await fetchOneEndpoint<T>(endpoint, options);
        setStatus({ loading: false, error: null, data });
      } else if (Array.isArray(endpoint)) {
        // Fetch multiple endpoints
        const responses = await Promise.all(
          endpoint.map((url) => fetchOneEndpoint<T>(url, options))
        );
        setStatus({ loading: false, error: null, data: responses as T });
      }
    } catch (error) {
      setStatus({
        loading: false,
        error: (error as Error).message,
        data: null,
      });
    }
  }, [endpoint, options]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { ...status, fetchData };
};
