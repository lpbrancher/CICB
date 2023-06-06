$(window).on('load', function(){
    $('.loader__container').fadeOut('slow')
    $('body').removeClass('loading')
    AOS.refresh()
})