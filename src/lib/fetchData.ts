interface FetchResponse<T> {
  data: T;
}

export const fetchData = async <T>(
  endpoint: string,
  options?: RequestInit,
): Promise<FetchResponse<T>> => {
  const baseUrl =
    typeof window === 'undefined'
      ? process.env.NEXT_PUBLIC_BASE_API_URL || 'http://localhost:3000/api'
      : '';

  const fetchUrl = `${baseUrl}${endpoint}`;

  try {
    const response = await fetch(fetchUrl, { ...options });

    if (!response.ok) {
      throw new Error(`Data not received: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Fetch error', error);
    throw error;
  }
};
