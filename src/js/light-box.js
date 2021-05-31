import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

export default function onLightboxOpen(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  basicLightbox.create(`<img src="${e.target.dataset.src}">`).show();
};