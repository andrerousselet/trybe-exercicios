function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

//Exercicio 1
let decDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let monthDaysList = document.querySelector('#days');
  
  for (let index = 0; index < decDaysList.length; index += 1) {
    let day = decDaysList[index];
    let dayListItem = document.createElement('li');
    dayListItem.innerHTML = day;
    dayListItem.className = 'day';

    if (day === 24 || day === 25 || day === 31) {
      dayListItem.classList.add('holiday');
    }
    if (day === 4 || day === 11 || day === 18 || day === 25) {
      dayListItem.classList.add('friday');
    }
    
    monthDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheMonth()

//Exercicio 2
let holidayBtn = document.createElement('button');

function createHolidaysButton(name) {
  let btnContainer = document.querySelector('.buttons-container');
  holidayBtn.id = 'btn-holiday';
  holidayBtn.innerHTML = name;
  btnContainer.appendChild(holidayBtn);
}

createHolidaysButton('Feriados');

//Exercicio 3
holidayBtn.addEventListener('click', changeHolidayColor);

function changeHolidayColor() {
  let holidays = document.querySelectorAll('.holiday');
  for (let holiday of holidays) {
    if (holiday.style.background === '') {
      holiday.style.background = 'pink';
    } else {
      holiday.style.background = '';
    }
  } 
}

//Exercicio 4
let fridayBtn = document.createElement('button');

function createFridaysButton(name) {
  let btnContainer = document.querySelector('.buttons-container');
  fridayBtn.id = 'btn-friday';
  fridayBtn.innerHTML = name;
  btnContainer.appendChild(fridayBtn);
}

createFridaysButton('Sexta-feira');

//Exercicio 5
function changeFridaysText() {
  let fridays = document.querySelectorAll('.friday');
  let fridaysNumber = [4,11,18,25];
  for (let friday in fridays) {
    if (fridays[friday].innerHTML !== 'Sexta-feira') {
      fridays[friday].innerHTML = 'Sexta-feira'
    } else {
      fridays[friday].innerHTML = fridaysNumber[friday];
    }
  }
}
fridayBtn.addEventListener('click', changeFridaysText);

//Exercicio 6
const days = document.querySelectorAll('.day');
function zoomIn(event) {
  event.target.style.fontSize = 'xx-large';
}
function zoomOut(event) {
  event.target.style.fontSize = '20px';
}
for (let day of days) {
  day.addEventListener('mouseover', zoomIn);
  day.addEventListener('mouseout', zoomOut);
}
