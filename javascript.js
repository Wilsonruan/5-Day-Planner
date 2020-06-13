var timeBlocks = document.getElementById('time-block')
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
document.getElementById('currentDay').textContent = days[new Date().getDay()] + ", " + new Date().getDate() + " " + months[new Date().getMonth()] + ", " + new Date().getFullYear();
var currentTime = new Date().getHours();
var arrayDayPlanner = JSON.parse(localStorage.getItem("arrayDayPlanner"));

if (arrayDayPlanner === null) {
    arrayDayPlanner = ["", "", "", "", "", "", "", ""];
}

for (var i = 0; i < 9; i++) {
    $('#time-block').append('<form method="POST" class="container d-flex justify-content-center"> <label class="hour col-2 col-sm-1"> <br> <p>' + hours[i] + '</p> </label> <textarea id="' + i + '" class="row col-8 col-sm-10"></textarea> <button class="saveBtn col-2 col-sm-1">Save</button> </form>')
    // var timeBlocksInside = timeBlocks.appendChild(document.createElement('form'));
    // timeBlocksInside.setAttribute('id',i)
    // timeBlocksInside.setAttribute('method',"POST")
    // timeBlocksInside.classList.add('container','d-flex', 'justify-content-center');
    // var timeBox = timeBlocksInside.appendChild(document.createElement('label'));
    // timeBox.appendChild(document.createElement('br'));
    // timeBox.appendChild(document.createElement('p'));
    // timeBlocksInside.appendChild(document.createElement('textarea'));
    // timeBlocksInside.appendChild(document.createElement("button"));
    // timeBlocksInside.children[0].classList.add('hour', 'col-2', 'col-sm-1');
    // timeBlocksInside.children[0].children[1].textContent = hours[i];
    // timeBlocksInside.children[1].classList.add('row', 'col-8', 'col-sm-10');
    // timeBlocksInside.children[1].textContent = arrayDayPlanner[i]
    // timeBlocksInside.children[2].classList.add('saveBtn', 'col-2', 'col-sm-1');
    // timeBlocksInside.children[2].textContent = "Save";

    // if (i + 9 == currentTime) {
    //     timeBlocksInside.children[1].classList.add('present')
    // } else if (currentTime < i + 9) {
    //     timeBlocksInside.children[1].classList.add('future')
    // } else {
    //     timeBlocksInside.children[1].classList.add('past')
    // }

    if (i + 9 == currentTime) {
        $('#'+ i).addClass('present')
    } else if (currentTime < i + 9) {
        $('#'+ i).addClass('future')
    } else {
        $('#'+ i).addClass('past')
    }
}

timeBlocks.addEventListener("click", function (event) {
    event.preventDefault();
    response = timeBlocks.children[event.target.parentElement.id].children[1].value;
    console.log(arrayDayPlanner);
    arrayDayPlanner[event.target.parentElement.id] = response;
    var JSONReadyUsers = JSON.stringify(arrayDayPlanner);
    localStorage.setItem("arrayDayPlanner", JSONReadyUsers);
});

