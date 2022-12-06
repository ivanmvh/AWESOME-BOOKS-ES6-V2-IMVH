import AwesomeBooks from './awesomebooks.js';
/*import './luxon_clock.js'; */

const btnAdd = document.getElementById('btn-add');
const listSec = document.getElementById('list-sec');

const showlist = document.getElementById('listshow');
const addshow = document.getElementById('addshow');
const contactshow = document.getElementById('contactshow');

const list = document.getElementById('list-books');
const add = document.getElementById('add-sec');
const contact = document.getElementById('contact1');

showlist.addEventListener('click', () => {
  list.style.display = 'flex';
  add.style.display = 'none';
  contact.style.display = 'none';
});

addshow.addEventListener('click', () => {
  list.style.display = 'none';
  add.style.display = 'flex';
  contact.style.display = 'none';
});

contactshow.addEventListener('click', () => {
  list.style.display = 'none';
  add.style.display = 'none';
  contact.style.display = 'flex';
});

/* link events */

btnAdd.addEventListener('click', AwesomeBooks.addBook);
listSec.addEventListener('click', AwesomeBooks.removeBook);

/* run */

AwesomeBooks.showList();
