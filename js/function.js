$(function(){
        $('.preloader_bg, .preloader_content').fadeIn(0);
        $(window).load(function(){
            $('.preloader_bg').delay(2000).fadeOut(1500);
            $('.preloader_content').delay(1000).fadeOut(750);
        });
    });
// Code By Webdevtrick ( https://webdevtrick.com )
var $header_top = $('.header-top');
var $nav = $('nav');
 
$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});
 
$('#fullpage').fullpage({
  sectionSelector: '.vertical-scrolling',
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection','sixtySection', 'seventySection','eightySection','ninetySection','tenthSection'],
  menu: '#menu',
  responsiveWidth:1279,

  afterLoad: function(anchorLink, index) {
    $header_top.css('background', 'rgba(0, 47, 77, .3)');
    $nav.css('background', 'rgba(0, 47, 77, .25)');
    // let items = document.querySelectorAll('.left-item')
    // let blockNav = document.querySelector('.template-left-position')
    // let posPage = index-1;
    // let posItem = items[posPage].getBoundingClientRect().top;
    // console.log(blockNav);
    // blockNav.textContent = `0${index}`;
    // blockNav.style.top = posItem + 'px';

    if (index != 5) {
      $('.scroll-block').removeClass('active');
    }
  },
 
  onLeave: function(index, nextIndex, direction) { 
    let items = document.querySelectorAll('.left-item')
    let blockNav = document.querySelector('.template-left-position')
    console.log(nextIndex);
    let posPage = nextIndex-2;
    if (items[posPage]) {
      let posItem = items[posPage].getBoundingClientRect().top;
      blockNav.textContent = `0${nextIndex-1}`;
      blockNav.style.top = posItem + 'px';
      $('.left-position').css(`transform', 'translateY(3rem)`);
    }
    else {
      blockNav.style.display = "none";
    }
    
    if (nextIndex == 1) {
      blockNav.style.display = "none";
    }
    else {
      blockNav.style.display = "block";
    }
  },
});

