export function getPaginationItems(
  currentPage: number,
  totalPages: number,
  neighbors: number = 2,
): (number | 'ellipsis')[] {
  const pagination: (number | 'ellipsis')[] = [];

  // if pages quantity is small - return all
  if (totalPages <= 1 + neighbors * 2 + 2) {
    for (let i = 1; i <= totalPages; i++) {
      pagination.push(i);
    }
    return pagination;
  }

  // always show first page
  pagination.push(1);

  // left boundary value
  const left = Math.max(2, currentPage - neighbors);

  // right boundary value
  const right = Math.min(totalPages - 1, currentPage + neighbors);

  // add '...' if space between first and left sibling > 1
  if (left > 2) {
    pagination.push('ellipsis');
  }

  // add pages between left and right

  for (let i = left; i <= right; i++) {
    pagination.push(i);
  }

  // add '...' if space between last page and right sibling > 1
  if (right < totalPages - 1) {
    pagination.push('ellipsis');
  }

  // always show last page
  pagination.push(totalPages);

  return pagination;
}
