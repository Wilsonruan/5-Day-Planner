var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
document.getElementById('currentDay').textContent = days[new Date().getDay()] + ", " + new Date().getDate() + " " + months[new Date().getMonth()] + ", " + new Date().getFullYear();

for (var i = 0; i < 9; i++) {
    timeBlocks = document.getElementById('time-block').appendChild(document.createElement('div'));
    timeBlocks.classList.add('container','d-flex', 'justify-content-center')
    timeBlocks.appendChild(document.createElement('p'));
    timeBlocks.appendChild(document.createElement('textarea'));
    timeBlocks.appendChild(document.createElement("button"));
    timeBlocks.children[0].classList.add('hour', 'col-1');
    timeBlocks.children[0].textContent = hours[i];
    timeBlocks.children[1].classList.add('row', 'col-10');
    timeBlocks.children[2].classList.add('saveBtn', 'col-1');
}


