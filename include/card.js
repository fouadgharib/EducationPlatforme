$(document).ready(function () {
  $("#clickme").click(function () {
    $("div").toggleClass("border");
    $("section").toggleClass("border");
  });
  $(".carte")
    .children("ul")
    .children("li")
    .children("span")
    .click(function () {
      $(this).find("i").toggleClass("fa-folder-plus ");
      $(this).find("i").toggleClass("active");
      $(this)
        .next()
        .slideToggle(function () {
          $(".carte")
            .children("ul")
            .children("li")
            .children("ul")
            .not(this)
            .slideUp();
        });
      $(".carte")
        .children("ul")
        .children("li")
        .not(this)
        .find("i")
        .addClass("fa-folder-plus");
    });

  //   $(".carte")
  //     .children("ul")
  //     .children("li")
  //     .click(function () {});
});
