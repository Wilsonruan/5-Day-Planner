var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
$('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));
var currentTime = moment().get('hour');
var arrayDayPlanner = JSON.parse(localStorage.getItem("arrayDayPlanner"));

if (arrayDayPlanner === null) {
    arrayDayPlanner = ["", "", "", "", "", "", "", "", ""];
}

for (var i = 0; i < arrayDayPlanner.length; i++) {

    var formInput = $('<form>').attr("id", "form" + i).addClass('container d-flex justify-content-center')

    var labelInput = $('<label>').addClass('hour col-3 col-lg-1 text-left')
    $(labelInput).append('<br>', '<p>')
    $(labelInput.children('p')).text(hours[i])
    
    var textInput = $('<textarea>').attr("id", "textarea" + i).addClass("row col-7 col-lg-10").text(arrayDayPlanner[i])

    var buttonInput = $('<button>').attr('id', i).addClass('saveBtn col-2 col-lg-1')
    $(buttonInput).append('<i>')
    $(buttonInput.children()).addClass('fa fa-save')

    $('div').append(formInput)
    $('#form' + i).append(labelInput, textInput, buttonInput)

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


