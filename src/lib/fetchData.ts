interface FetchResponse<T> {
  data: T;
}

export const fetchData = async <T>(
  endpoint: string,
  options?: RequestInit,
): Promise<FetchResponse<T>> => {
  try {
    const response = await fetch(endpoint, { ...options });

    if (!response.ok) {
      throw new Error(`Data not received: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Fetch error', error);
    throw error;
  }
};
