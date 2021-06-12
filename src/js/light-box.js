import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { lightboxSpinner } from './spinner';
import { Spinner } from 'spin.js';

export default function onLightboxOpen(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  basicLightbox.create(`<img src="${e.target.dataset.src}">`).show();

  const spinner = new Spinner(lightboxSpinner);
  // Реф на модалку
  const lightboxRef = document.querySelector('.basicLightbox');

  // Запуск спиннера
  spinner.spin(lightboxRef);

  // Обновление картинки
  e.target.src = e.target.dataset.src;

  // Остановка спиннера при загрузке
  e.target.onload = () => spinner.stop();

};
