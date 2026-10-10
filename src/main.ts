import './style.css';

const heading = document.querySelector<HTMLHeadingElement>('h1');

if (heading) {
  heading.dataset.ready = 'true';
}

