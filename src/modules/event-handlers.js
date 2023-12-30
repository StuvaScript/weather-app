import { fetchAutocomplete } from './functions';

export { searchInputLogic };

const searchBtn = document.querySelector('#search-button');

function searchInputLogic() {
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const inputValue = document.querySelector('#search-input').value;
    fetchAutocomplete(inputValue);
  });
}
