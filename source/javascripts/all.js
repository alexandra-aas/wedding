var anchoredSection = $(".js-anchor");
var navHeight = $(".js-nav").height();
var navLink = $(".js-nav-link");
var heroSectionHeight = $("#anchor_hero").height();

checkCurrentSectionOnScroll();
countDown();

navLink.click(function() {
  var target = $($(this).data("target"));
  var scrollDistance = target.offset().top - navHeight;

  $("html, body").animate({ scrollTop: scrollDistance }, 1000);
});

$(window).scroll(function() {
  var windowScrollHeight = $(window).scrollTop();

  checkCurrentSectionOnScroll();

  if (windowScrollHeight > navHeight) {
    $(".js-nav").addClass("scrolled");
  } else {
    $(".js-nav").removeClass("scrolled");
  }
});

function countDown() {
  var wedding = moment([2016, 10, 22]).fromNow(true);
  $(".js-from-now").append(wedding);
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
