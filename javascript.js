var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById('currentDay').textContent = days[new Date().getDay()] + ", " + new Date().getDate() + " " + months[new Date().getMonth()] + ", " + new Date().getFullYear();
var timeBlocks = document.getElementById('time-block');
var textArea = document.createElement('textarea');
var button = document.createElement("button");
timeBlocks.appendChild(textArea);
timeBlocks.appendChild(button);
timeBlocks.children[1].classList.add('saveBtn')