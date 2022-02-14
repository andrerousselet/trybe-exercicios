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
function createHolidaysButton(name) {
  let btnContainer = document.querySelector('.buttons-container');
  let holidayBtn = document.createElement('button');
  holidayBtn.id = 'btn-holiday';
  holidayBtn.innerHTML = name;
  btnContainer.appendChild(holidayBtn);
}

createHolidaysButton('Feriados');