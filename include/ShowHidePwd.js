$(document).ready(function () {
  $("input[type=checkbox]").change(function () {
    if ($("#pwd").attr("type") == "password") {
      $("#pwd").attr("type", "text");
    } else {
      $("#pwd").attr("type", "password");
    }
  });
});
