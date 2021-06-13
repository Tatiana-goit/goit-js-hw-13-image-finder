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
  const lightboxRef = document.querySelector('.basicLightbox');
  spinner.spin(lightboxRef);
  e.target.src = e.target.dataset.src;
  e.target.onload = () => spinner.stop();

};
