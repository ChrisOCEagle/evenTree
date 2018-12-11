$(document).ready(() => {
  $(".btn-choice").on("click", (event) => {
    event.preventDefault();
    var id = $(this).data("id");
    console.log(id);
  });
});
