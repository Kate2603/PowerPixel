const searchForm = document.querySelector('.js-search-form');
const searchInput = document.querySelector('.js-search-input');

export function hideSearch() {
  if (!searchForm.classList.contains('hidden-search')) {
    searchForm.classList.add('hidden-search');
  }
}

export function showSearch() {
  if (searchForm.classList.contains('hidden-search')) {
    searchForm.classList.remove('hidden-search');
  }
}

export function getSearchValue() {
  return searchInput.value;
}
