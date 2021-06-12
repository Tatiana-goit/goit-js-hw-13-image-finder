import { searchForm, galleryList, loadMoreBtn,searchFormButton } from './refs';
import ApiService from './apiService';
import imageCardTpl from '../templates/image-card.hbs';
import onLightboxOpen from './light-box';
import onScroll from './scroll';
import { previewSpinner } from './spinner';
import { Spinner } from 'spin.js';


const fetchService = new ApiService();

function clearContainer() {
  galleryList.innerHTML = '';
  loadMoreBtn.classList.add('is-hidden');
}


function createMarkup(images) {
  const imageCard = imageCardTpl(images);
  galleryList.insertAdjacentHTML('beforeend', imageCard);

  if (images.length < 12) {
    loadMoreBtn.classList.add('is-hidden');
  } else {
    loadMoreBtn.classList.remove('is-hidden');
  }
}

async function fetch() {
  try {
    const data = await fetchService.fetchImg();
    createMarkup(data);
  } catch (error) {
    console.log(error);
  }
}

function onLoadMore() {
  fetch();
  onScroll();
}


function onSearch(e) {
  e.preventDefault();
  fetchService.query = e.target.elements.query.value;
  

  if (!fetchService.query) {
    clearContainer();
    return;
  }

  clearContainer();
  fetch();

  // const spinner = new Spinner(previewSpinner);

  // // Запуск спиннера
  // spinner.spin(searchForm);


  // // Остановка спиннера при загрузке !!!!!!
  // e.target.onload = () => spinner.stop();
}



searchForm.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);
galleryList.addEventListener('click', onLightboxOpen);
