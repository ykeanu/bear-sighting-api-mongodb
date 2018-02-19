// -------------------- HELPER FUNCTIONS -------------------

// Diplays current time
$('#current-time').html(moment().format('hh:mm'));

const renderCurrentSightings = () => {
  $('#bear-table > tbody').empty();
  // Gets sightings and renders on table
  $.get('http://localhost:3000/sighting/search?params=start_date', function(
    data
  ) {
    data.map(element => {
      console.log(element._id);
      const bearType = element.bear_type;
      const notes = element.notes;
      const zipCode = element.zip_code;
      const numBears = element.num_bears;
      const dateSighted = element.date_sighted;
      const uniqueID = element._id;
      
      $('#bear-table > tbody').append(
        '<tr><td>' +
          bearType +
          '</td><td>' +
          notes +
          '</td><td>' +
          zipCode +
          '</td><td>' +
          numBears +
          '</td><td>' +
          dateSighted +
          '</td><td>' +
          uniqueID +
          '</td></tr>'
      );
    });
  });
};

// -------------------- MAIN PROCESS --------------------
$(document).ready(function() {
  renderCurrentSightings();
  // Send data to mongoDB
  $('#submit-btn').on('click', function(event) {
    event.preventDefault();

    // Stores user input
    const bearType = $('#bear-type-input')
      .val()
      .trim();
    const notes = $('#notes-input')
      .val()
      .trim();
    const zipCode = $('#num-bears-input')
      .val()
      .trim();
    const numBears = $('#zip-code-input')
      .val()
      .trim();
    const dateSighted = $('#date-input')
      .val()
      .trim();

    // Convert to an object
    const newBearSighting = {
      bear_type: bearType,
      notes: notes,
      zip_code: zipCode,
      num_bears: numBears,
      date_sighted: dateSighted
    };

    // Posts object to API endpoint
    $.post('http://localhost:3000/sighting', newBearSighting, function(data) {
      console.log('This is successful');
    });

    // Empties values on form
    $('#bear-type-input').val('');
    $('#notes-input').val('');
    $('#num-bears-input').val('');
    $('#zip-code-input').val('');
    $('#date-input').val('');

    renderCurrentSightings();

    // Since button type is submit, prevent page from refreshing
    return false;
  });
});
