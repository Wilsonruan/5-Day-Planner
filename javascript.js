var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
$('#currentDay').text(days[new Date().getDay()] + ", " + new Date().getDate() + " " + months[new Date().getMonth()] + ", " + new Date().getFullYear());
var currentTime = new Date().getHours();
var arrayDayPlanner = JSON.parse(localStorage.getItem("arrayDayPlanner"));

if (arrayDayPlanner === null) {
    arrayDayPlanner = ["", "", "", "", "", "", "", ""];
}

for (var i = 0; i < 9; i++) {
    $('div').append('<form id="form' + i + '" method="POST" class="container d-flex justify-content-center"> </form>');
    $('#form' + i).append('<label class="hour col-2 col-sm-1"> <br> <p>' + hours[i] + '</p> </label>');
    $('#form' + i).append('<textarea id="textarea' + i + '" class="row col-8 col-sm-10"></textarea>');
    $('#form' + i).append('<button id="' + i + '" class="saveBtn col-2 col-sm-1">Save</button>');
    $('#textarea' + i).text(arrayDayPlanner[i]);

    if (i + 9 == currentTime) {
        $('#textarea'+ i).addClass('present')
    } else if (currentTime < i + 9) {
        $('#textarea'+ i).addClass('future')
    } else {
        $('#textarea'+ i).addClass('past')
    }
}

$('#time-block').on("click", function (event) {
    event.preventDefault();
    response = $('#textarea'+ event.target.id).val();
    arrayDayPlanner[event.target.id] = response;
    var JSONReadyUsers = JSON.stringify(arrayDayPlanner);
    localStorage.setItem("arrayDayPlanner", JSONReadyUsers);
});
