$(document).ready(function () {
  // Details slider script
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    navText: [
      '<img src="./images/details-img/left-arrow.png" alt="Left">',
      '<img src="./images/details-img/right-arrow.png" alt="Right">',
    ],
    dots: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      490: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });

  // Image Pop-up script
  $(".imgPopup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});
