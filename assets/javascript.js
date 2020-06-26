var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
$('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));
var currentTime = moment().get('hour');
var arrayDayPlanner = JSON.parse(localStorage.getItem("arrayDayPlanner"));

if (arrayDayPlanner === null) {
    arrayDayPlanner = ["", "", "", "", "", "", "", "", ""];
}

for (var i = 0; i < arrayDayPlanner.length; i++) {

    var formInput = $('<form>').attr("id", "form" + i).addClass('container d-flex justify-content-center')
    $('div').append(formInput)
    // $('div').append('<form id="form' + i + ' class="container d-flex justify-content-center"></form>');

    var labelInput = $('<label>').addClass('hour col-3 col-lg-1 text-left')
    $('#form' + i).append(labelInput)
    $(labelInput).append('<br>', '<p>')
    $(labelInput.children('p')).text(hours[i])
    // $('#form' + i).append('<label class="hour col-3 col-lg-1 text-left"> <br> <p>' + hours[i] + '</p> </label>');
    
    var textInput = $('<textarea>').attr("id", "textarea" + i).addClass("row col-7 col-lg-10").text(arrayDayPlanner[i])
    $('#form' + i).append(textInput)
    // $('#form' + i).append('<textarea id="textarea' + i + '" class="row col-7 col-lg-10">' + arrayDayPlanner[i] + '</textarea>');

    var buttonInput = $('<button>').attr('id', i).addClass('saveBtn col-2 col-lg-1')
    $('#form' + i).append(buttonInput)
    $(buttonInput).append('<i>')
    $(buttonInput.children()).addClass('fa fa-save')
    // $('#form' + i).append('<button id="' + i + '" class="saveBtn col-2 col-lg-1"><i class="fa fa-save"></button>');

    if (i + 9 == currentTime) {
        $('#textarea' + i).addClass('present')
    } else if (currentTime < i + 9) {
        $('#textarea' + i).addClass('future')
    } else {
        $('#textarea' + i).addClass('past')
    }
}

$('button').click(function (event) {
    event.preventDefault();
    response = $('#textarea' + event.target.id).val();
    arrayDayPlanner[event.target.id] = response;
    var JSONReadyUsers = JSON.stringify(arrayDayPlanner);
    localStorage.setItem("arrayDayPlanner", JSONReadyUsers);
});


