$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
      var devoured = $(this).data("devoured");
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: {devoured: devoured}
      }).then(function() {
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        name: $("#burger").val().trim(),
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function() {
          location.reload();
        }
      );
    });
 });
  