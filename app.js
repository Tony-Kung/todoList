$(document).ready(function () {
  $("#input").change(function () {
    var input = $(this).val();
    $("ul").append(
      "<li>" +
        input +
        '<i class="fa fa-check"></i> <i class="fa fa-trash"></i> </li>'
    );
    // $("ul").append(
    //   "<li>" +
    //     input +
    //     "<i class='fa fa-check'></i> <i class='fa fa-trash'></i> <li>"
    // );
    $(this).val("");
  });

  $("ul").on("click", ".fa-trash", function () {
    $(this).parent("li").hide(750);
  });

  $("ul").on("click", ".fa-check", function () {
    $(this).parent("li").toggleClass("checked");
  });
});
