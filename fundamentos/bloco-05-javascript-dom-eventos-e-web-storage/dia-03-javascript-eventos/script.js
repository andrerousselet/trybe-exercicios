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
  event.target.style.fontSize = '28px';
}
function zoomOut(event) {
  event.target.style.fontSize = '20px';
}
for (let day of days) {
  day.addEventListener('mouseover', zoomIn);
  day.addEventListener('mouseout', zoomOut);
}

//Exercicio 7
const myTasks = document.querySelector('.my-tasks');
const addTask = (task) => {
  const newTask = document.createElement('span');
  myTasks.appendChild(newTask);
  newTask.innerText = task;
}
addTask('Projeto: ')

//Exercicio 8
const addColorLabel = (color) => {
  const newLabel = document.createElement('div');
  myTasks.appendChild(newLabel);
  newLabel.style.backgroundColor = color;
  newLabel.classList.add('task')
}
addColorLabel('green')

//Exercicio 9
const newLabel = document.querySelector('.task');
newLabel.addEventListener('click', (event) => {
  if (event.target.className === 'task') {
    event.target.classList.add('selected');
  } else {
    event.target.className = 'task';
  }
})

//Exercicio 10
const colorDay = () => {
  const calendarDays = document.getElementsByClassName('day');
  const label = document.querySelector('.task');
  const labelColor = label.style.backgroundColor;
  for (let day of calendarDays) {
    day.addEventListener('click', (event) => {
      if (label.classList.contains('selected') && event.target.style.color !== labelColor) {
        event.target.style.color = labelColor;
      } else if (label.classList.contains('selected')) {
        event.target.style.color = 'rgb(119,119,119)';
      }
    })
  }
}
colorDay();

//Bônus
const addBtn = document.getElementById('btn-add');
const input = document.getElementById('task-input');
const taskList = document.querySelector('.task-list');

const addTaskInList = () => {
  const task = document.createElement('li');
  if (input.value === '') alert('Escreva algum compromisso para inserir na lista!')
  taskList.appendChild(task);
  task.innerHTML = input.value;
}
addBtn.addEventListener('click', addTaskInList)

input.addEventListener('keyup', (event) => {
  const task = document.createElement('li');
  if (event.key === 'Enter' && input.value.length > 0)
  taskList.appendChild(task);
  task.innerHTML = input.value;
})