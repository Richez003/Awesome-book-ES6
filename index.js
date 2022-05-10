/*eslint-disable*/
import BooksdataBase from './modules/books.js';
import pageNav from './Modules/navigation.js';

const date = document.getElementById('date');

window.setInterval(() => {
  // eslint-disable-next-line no-undef
  date.innerHTML = `<p>${luxon.DateTime.local().toLocaleString(luxon.DateTime.DATETIME_MED_WITH_SECONDS)
  }</p>`;
}, 1000, this);

const newBook = new BooksdataBase();
newBook.addBooks();
pageNav();