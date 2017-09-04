$(function() {

  let portfolioList = $('.portfolio__list');

  portfolioList.imagesLoaded(function() {
    portfolioList.isotope({
      itemSelector: '.portfolio__item',
      layoutMode: 'fitRows'
    });
  });

  $("[data-filter]").on("click", function(e) {
    e.preventDefault();
    let selector;
    $("[data-filter]").removeClass("filters__link--active");
    $(this).addClass("filters__link--active");
    if ($(this).data("filter") == "all") {
      selector = "*";
    } else {
      selector = '[data-type="' + $(this).data("filter") + '"]';
    }
    portfolioList.isotope({
      filter: selector
    });
  });
});

$(function() {
  $('.content').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});
