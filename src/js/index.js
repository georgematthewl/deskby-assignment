$(document).ready(function() {
  $("#arrow-up").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#main-section").offset().top
      },
      500
    );
  });

  $(".navbar-nav li a").click(function() {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 56
      },
      500
    );
  });

  function toggleArrowUp() {
    if (
      document.body.scrollTop > 600 ||
      document.documentElement.scrollTop > 600
    ) {
      document.getElementById("arrow-up").style.display = "block";
    } else {
      document.getElementById("arrow-up").style.display = "none";
    }
  }

  $(document).scroll(function() {
    let scrollPos = $(document).scrollTop();
    let firstSection = $("#first-section").offset().top;

    if (scrollPos >= firstSection - 64) {
      $("#nav").addClass("bg-nav");
    } else if (scrollPos < firstSection) {
      $("#nav").removeClass("bg-nav");
    }

    toggleArrowUp();
  });
});
