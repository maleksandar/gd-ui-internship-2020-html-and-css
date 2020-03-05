$(document).ready(function() {
  $("[data-class]").click(function() {
    updateNavbarClass($(this).attr("data-class"));
  });
  updateNavbarClass("fixed-left");
});

function updateNavbarClass(className) {
  $("nav")
    .removeClass(function(index, css) {
      return (css.match(/(^|\s)fixed-\S+/g) || []).join(" ");
    })
    .addClass(className);
  $("[data-class]")
    .removeClass("active")
    .parent("li")
    .removeClass("active");
  $('[data-class="' + className + '"]')
    .addClass("active")
    .parent("li")
    .addClass("active");
  fixBodyMargin(className);
}
