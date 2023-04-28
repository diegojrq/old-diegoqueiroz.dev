
function loadStickySidebar() {

    var $sticky = $('.sticky');
    var $headerTopOffset = $('.header').innerHeight();;
    
    if (!!$sticky.offset()) {
        
      contentInnerHight = $('.content').innerHeight();
      sidebarInnerHeight = $sticky.innerHeight();

      var stickyTop = $sticky.offset().top - $headerTopOffset;
      var stopPoint = contentInnerHight - sidebarInnerHeight + stickyTop;
  
      $(window).scroll(function() {

        var windowTop = $(window).scrollTop();

        if (stopPoint < windowTop) {
            $sticky.css({ position: 'absolute', top: stopPoint + $headerTopOffset });
        } else if (stickyTop < windowTop) {
            $sticky.css({ position: 'fixed', top: $headerTopOffset });
        } else {
            $sticky.css({position: 'absolute', top: 'initial'});
        }
      });  
    }
}