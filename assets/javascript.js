var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
$('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));
var currentTime = moment().get('hour');
console.log(currentTime)
var arrayDayPlanner = JSON.parse(localStorage.getItem("arrayDayPlanner"));

if (arrayDayPlanner === null) {
    arrayDayPlanner = ["", "", "", "", "", "", "", "", ""];
}

for (var i = 0; i < arrayDayPlanner.length; i++) {
    $('div').append('<form id="form' + i + '" method="POST" class="container d-flex justify-content-center"> </form>');
    $('#form' + i).append('<label class="hour col-3 col-lg-1 text-left"> <br> <p>' + hours[i] + '</p> </label>');
    $('#form' + i).append('<textarea id="textarea' + i + '" class="row col-7 col-lg-10">' + arrayDayPlanner[i] + '</textarea>');
    $('#form' + i).append('<button id="' + i + '" class="saveBtn col-2 col-lg-1"><i class="fa fa-save"></button>');

    if (i + 9 == currentTime) {
        $('#textarea'+ i).addClass('present')
    } else if (currentTime < i + 9) {
        $('#textarea'+ i).addClass('future')
    } else {
        $('#textarea'+ i).addClass('past')
    }
}

$('button').click(function (event) {
    event.preventDefault();
    response = $('#textarea'+ event.target.id).val();
    arrayDayPlanner[event.target.id] = response;
    var JSONReadyUsers = JSON.stringify(arrayDayPlanner);
    localStorage.setItem("arrayDayPlanner", JSONReadyUsers);
});

