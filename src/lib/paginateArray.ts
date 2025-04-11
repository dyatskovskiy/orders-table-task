export function paginateArray<T>(
  array: T[],
  currentPage: number,
  limit: number,
): T[] {
  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;
  return array.slice(startIndex, endIndex);
}
