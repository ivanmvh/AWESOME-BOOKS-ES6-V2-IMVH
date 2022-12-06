/* eslint-disable linebreak-style */
import { DateTime } from './luxon.js';

const dateDisplay = document.querySelector('#date-time');
const setTime = () => {
  const formatedDate = DateTime.now().toRFC2822();
  dateDisplay.textContent = formatedDate;
};

setInterval(setTime, 1000);