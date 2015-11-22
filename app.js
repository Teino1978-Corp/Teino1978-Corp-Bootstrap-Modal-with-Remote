$(document).ready(function() {
  $(document).on('.ajaxModal', 'click', function(event) {
    $.get($(this).attr('href'), function(response) {
      $('<div class="modal hide fade">' + response + '</div>').modal();
    });
    event.preventDefault();
  });
});