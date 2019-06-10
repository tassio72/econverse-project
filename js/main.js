$(document).ready(function(){
    // slider brands
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

    // buttons news
    $('.news-navbar-item').on('click', function(event){
        $('.news-navbar-item').css('border-bottom', '1px solid #c5c5c5')
        $(`.${event.target.innerText.toLowerCase()}`).css('border-bottom', '1px solid #000')

  
    })
    // slider news
    $('.next-new').on('click', function(){
        var currentImg = $('.active-new');
        
        var nextImg = currentImg.next();
    
        if(nextImg.length){
          currentImg.removeClass('active-new');
          nextImg.addClass('active-new');
        }
    });

    $('.prev-new').on('click', function(){
        var currentImg = $('.active-new');
        var prevImg = currentImg.prev();
    
        if(prevImg.length){
          currentImg.removeClass('active-new');
          prevImg.addClass('active-new');
        }
    });
});

$( window ).resize(function() {
    if (screen.width > 768) {
        $('.news-art :nth-child(2)').addClass('active-new')
        $('.news-art :nth-child(3)').addClass('active-new')    
    }

    if (screen.width < 768) {
        $('.news-art :nth-child(2)').removeClass('active-new')
        $('.news-art :nth-child(3)').removeClass('active-new') 
        $('.news-art :nth-child(1)').addClass('active-new')
        
    }


  })