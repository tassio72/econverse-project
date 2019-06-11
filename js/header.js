// navbar menu

const btnNav = $('.navbar')

$('.btn-nav').on('click', function(){
  btnNav.css('display', 'flex')
})

$('.btn-close').on('click', function(){
  btnNav.css('display', 'none')
})

// search-input 

const helperSearch = $('.helper-field-search')

$('.helper-search').on('click', function(){
  helperSearch.css('display', 'inline')
})

$('.btn-close-search').on('click', function(){
  helperSearch.css('display', 'none')
})


