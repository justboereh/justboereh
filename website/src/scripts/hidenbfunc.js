import { hide } from '../stores/navbar';

let lastscrolledy = 0;

export default (e) => {
  const deltay = e.target.scrollTop - lastscrolledy;
  lastscrolledy = e.target.scrollTop;

  if (deltay <= 0 || !e.target.scrollTop >= 80) {
    hide.update((_) => false);
  } else {
    hide.update((_) => true);
  }
};
