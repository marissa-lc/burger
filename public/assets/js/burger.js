$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
      var devoured = $(this).data("devoured");
      console.log(id, devoured);
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: {devoured: devoured}
      }).then(function() {
          location.reload();
        }
      );
    });
  
    $(".create-burger").on("submit", function(event) {
      event.preventDefault();
  
      var burgerName = $("#burger").val().trim();
 
      $.ajax("/api/burgers/" + burgerName, {
        type: "POST",
        data: { name: burgerName },
      }).then(function() {
          location.reload();
        }
      );
    });
  });
  