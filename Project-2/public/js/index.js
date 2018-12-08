// wait until the DOM is loaded to attach the handlebars
$(function() {
  // set-up an on click event for the submit button that will create a user
  $("#create-user").on("click", event => {
    event.preventDefault();

    // create a new user
    var newUser = {
      username: $("#userName")
        .val()
        .trim(),
      email: $("#email")
        .val()
        .trim(),
      password: $("#password")
        .val()
        .trim()
    };

    // send the POST request
    $.ajax("/members", {
      type: "POST",
      data: newUser
    }).then(() => {
      // reload the page to get the updated list
      location.reload();
    });
  });
});
