import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import { ligtboxSpinner } from './spinner';

export default function onLightboxOpen(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  basicLightbox.create(`<img src="${e.target.dataset.src}">`).show();
};

 // Запуск спиннера
 ligtboxSpinner.spin(lightboxRef);

  // Остановка спиннера при загрузке
  e.target.onload = () => ligtboxSpinner.stop();
