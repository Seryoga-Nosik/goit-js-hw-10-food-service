import menu from '../menu.json';
import template from '../templates/markup.hbs';

const menuList = document.querySelector('.js-menu');
menuList.insertAdjacentHTML('beforeend', template(menu));
