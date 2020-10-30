$('.deal-slider').slick({
  slidesToShow: 1,
  prevArrow: '.prev-btn_deal-slider',
  nextArrow: '.next-btn_deal-slider',

});
$('.hero-slider').slick({
  slidesToShow: 1,
  prevArrow: '.prev-btn_hero-slider',
  nextArrow: '.next-btn_hero-slider',
  speed: 400,
});

$('.partners-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  prevArrow: '.prev-btn_partners-slider',
  nextArrow: '.next-btn_partners-slider',
  dots: true,
  dotsClass: 'pagination-wrp',
  // adaptiveHeight: true,
  speed: 400,
  responsive: [{
    breakpoint: 750,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }]
});

const sideMenuWrapper = document.querySelector('.mobile-menu-wrp');
const sideMenu = document.querySelector('.mobile-menu');
const menuButton = document.getElementById('menu-btn');


menuButton.addEventListener('click', () => {
  menuButton.classList.add('menu-button__active');
  document.getElementsByTagName('html')[0].classList.toggle('overfl');
  if (menuButton.className.includes('menu-button__active')) {
    sideMenuWrapper.style.display = 'block';
    sideMenuWrapper.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    setTimeout(function () {
      sideMenu.style.transform = 'translateX(-300px)';
    }, 10);
    window.addEventListener('click', () => {
      let target = event.target;
      if (target.className === 'mobile-menu-wrp' || target.className === 'site-logo') {
        sideMenu.style.transform = 'translateX(0px)';
        sideMenuWrapper.style.backgroundColor = "rgba(0, 0, 0, 0)";
        setTimeout(function () {
          sideMenuWrapper.style.display = 'none';
        }, 500);
        menuButton.classList.remove('menu-button__active');
        document.getElementsByTagName('html')[0].classList.remove('overfl');
      }
    });
  }
});