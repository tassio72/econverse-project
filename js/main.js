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
  var width = (parseInt($('.news-art-item').outerWidth() + parseInt($('.news-art-item').css('margin-right')))) * $('.news-art-item').length

  $('.news-art').css('width', width);

  var numImg = 3;
  var marginPaddin = 1.438;

  var ident = 0;
  var count = ($('.news-art-item').length / numImg) - 1;
  var slide = (numImg * marginPaddin) + ($('.news-art-item').outerWidth() * numImg)

  $('.next-new').on('click', function() {
    if (ident < count) {
      ident++;
      $('.news-art').animate({'margin-left': '-=' + slide + 'px'}, '500')
    }
  })

  $('.prev-new').on('click', function() {
    if (ident >= 1) {
      ident--;
      $('.news-art').animate({'margin-left': '+=' + slide + 'px'}, '500')
    }
  })



})
