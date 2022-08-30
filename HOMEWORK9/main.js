// ---------------------task 1---------------------

$(document).ready(function() {
  $("a[href^='https']").attr("target", "_blank");
});

// ---------------------task 2---------------------

$(function() {
  $("h2.head").css("background-color", "green");
  $("h2.head .inner").attr("style", "font-size: 35px");
});

// ---------------------task 3---------------------

$(function() {
  $("h3").each(function(i, el) {
    $(el).before($(el).next());
  });
});

// ---------------------task 4---------------------

let form = document.querySelector('#checkboxes');
for (let index = 1; index <= 6; index++) {
  form.innerHTML += `<input type="checkbox" name="checkbox${index}" id="checkbox${index}"><label for="checkbox${index}">checkbox${index}</label><br />`;
}

$(document).ready(function() {
  $('input[type=checkbox]').on("click", function(e) {
    $('input[type=checkbox]:checked').each(function(i, el) {
        if (i === 2) {
          $('input[type=checkbox]').attr("disabled", "disabled");
        }
    });
  });
});