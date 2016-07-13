//= require jquery
//= require moment

var anchoredSection = $(".js-anchor");
var nav = $(".js-nav");
var navHeight = nav.height();
var navLink = $(".js-nav-link");
var windowScrollHeight = $(window).scrollTop();

checkCurrentSectionOnScroll();
countDown();
navScrollStyling(windowScrollHeight);

$(window).scroll(function() {
  checkCurrentSectionOnScroll();
  navScrollStyling();
});

navLink.click(function() {
  var target = $($(this).data("target"));
  var scrollDistance = target.offset().top - navHeight;

  $("html, body").animate({ scrollTop: scrollDistance }, 1000);
});

function navScrollStyling(windowScrollHeight) {
  var windowScrollHeight = $(window).scrollTop();

  if (windowScrollHeight > navHeight) {
    nav.addClass("scrolled");
  } else {
    nav.removeClass("scrolled");
  }
}

function countDown() {
  var today = moment([]);
  var weddingDay = moment([2016, 09, 22]);
  var fromNow = weddingDay.diff(today, "days");

  if (fromNow > 1) {
    var fromNowFormatted = fromNow + " Days to go";
  } else if (fromNow == 1) {
    var fromNowFormatted = fromNow + " Day to go";
  } else if (fromNow == 0) {
    var fromNowFormatted = "Our wedding is today"
  } else {
    var fromNowFormatted = "Thanks for coming to our wedding"
  }

  $(".js-from-now").append(fromNowFormatted);
}

function checkCurrentSectionOnScroll() {
  anchoredSection.each(function() {
    var section = $(this);
    var sectionId = section.attr("id");
    var sectionNavLink = $('[data-target="#' + sectionId + '"]');
    var sectionTop = section.offset().top;
    var sectionBottom = sectionTop + section.outerHeight();
    var windowScrollHeight = $(window).scrollTop();
    var windowBelowSectionTop = windowScrollHeight >= (sectionTop - navHeight);
    var windowAboveSectionBottom = windowScrollHeight < sectionBottom;
    var windowInsideSection = windowAboveSectionBottom && windowBelowSectionTop;

    if (windowInsideSection) {
      updateNav(sectionNavLink);
    }
  });
}

function updateNav(currentNavLink) {
  navLink.removeClass("active");
  currentNavLink.addClass("active");
}
