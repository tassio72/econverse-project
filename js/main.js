// slider brands
$(document).ready(function(){
  $('.next').on('click', function(){
    var currentImg = $('.active-brand');
    var nextImg = currentImg.next();

    if(nextImg.length == 7){
      currentImg.removeClass('active-brand');
      nextImg.addClass('active-brand');
    }
  });

  $('.prev').on('click', function(){
    var currentImg = $('.active-brand');
    var prevImg = currentImg.prev();

    if(prevImg.length == 7){
      currentImg.removeClass('active-brand');
      prevImg.addClass('active-brand');
    }

    
  });

})

// navbar news
$('.news-navbar-item').on('click', function(event){
  $('.news-navbar-item').css('border-bottom', '1px solid #c5c5c5')
  $(`.${event.target.innerText.toLowerCase()}`).css('border-bottom', '1px solid #000')


})

// slider news
$(function() {

  const carousel = $('.news-art-item');

  let width = (parseInt(carousel.outerWidth() + parseInt(carousel.css('margin-right')))) * carousel.length

  $('.news-art').css('width', width);

  let numImg = 3;
  let marginPaddin = 1.438;

  let ident = 0;
  let count = (carousel.length / numImg);
  let slide = (numImg * marginPaddin) + (carousel.outerWidth() * numImg)

  $('.next-new').on('click', function() {
    if (ident < count) {
      ident++;
      $('.news-art').animate({'margin-left': '-=' + slide + 'px'}, '500')
    }
  })

  $('.prev-new').on('click', function() {
    
    if (ident >= -1) {
      ident--;
      $('.news-art').animate({'margin-left': '+=' + slide + 'px'}, '500')
    }
  })



})
