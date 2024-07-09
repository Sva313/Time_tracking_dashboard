
    $(document).ready(function(e) {
    $.getJSON( "priorities.json" , function( result ){
        alert(result.start.count);
    });
});

$(document).ready(function() {
    $.getJSON("data.json", function(data) {
      $("#username").text(data.name);
      
      $.each(data.reports, function(key, value) {
        $("#" + key + " .activity-title").text(value.title);
        $("#" + key + " .activity-current").text(value.current);
        $("#" + key + " .activity-previous").text("Last Week - " + value.previous);
      });
    });
  });