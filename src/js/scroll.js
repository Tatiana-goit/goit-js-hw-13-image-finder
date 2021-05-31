import { loadMoreBtn } from './refs';

export default function onScroll() {
    setTimeout(() => {
      loadMoreBtn.scrollIntoView({behavior: 'smooth', block: 'end'});
   }, 1000)
  }