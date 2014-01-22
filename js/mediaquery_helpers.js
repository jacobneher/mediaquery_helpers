(function($) {
  $(document).ready(function($) {
    // We need to create the divs if they are not already present...
    if (!$('#mediaquery-helpers-scroll-indicator').length) {
      $(document.body).append('<div id="mediaquery-helpers-scroll-indicator" class="mediaquery-helpers-indicator"></div>');
    }
    if (!$('#mediaquery-helpers-dimensions-indicator').length) {
      $(document.body).append('<div id="mediaquery-helpers-dimensions-indicator" class="mediaquery-helpers-indicator"></div>');
    }

    // Cache the Window object
    $window = $(window);
    // Get the inital values for height and width when the page is loaded...
    var scrollWidth = getScrollBarWidth();
    $('#mediaquery-helpers-dimensions-indicator').html($window.width() + scrollWidth + 'px' + ' x ' + $window.height() + 'px');
    
    // Set the initial value
    $('#mediaquery-helpers-scroll-indicator').html($window.scrollTop() + 'px');
    $window.scroll(function() {
      // ...then get the value as the page is actively scrolled
      $('#mediaquery-helpers-scroll-indicator').html($window.scrollTop() + 'px');
    });
    
    $window.resize(function() {
      // ... then get the value when the window is resized
      $('#mediaquery-helpers-dimensions-indicator').html($window.width() + scrollWidth + 'px' + ' x ' + $window.height() + 'px');
    });
  });

  function getScrollBarWidth() {
    if ($(document).height() > $(window).height()) {
    var scr = null;
    var inn = null;
    var wNoScroll = 0;
    var wScroll = 0;
 
    // Outer scrolling div
    scr = document.createElement('div');
    scr.style.position = 'absolute';
    scr.style.top = '-1000px';
    scr.style.left = '-1000px';
    scr.style.width = '100px';
    scr.style.height = '50px';
    // Start with no scrollbar
    scr.style.overflow = 'hidden';
 
    // Inner content div
    inn = document.createElement('div');
    inn.style.width = '100%';
    inn.style.height = '200px';
 
    // Put the inner div in the scrolling div
    scr.appendChild(inn);
    // Append the scrolling div to the doc
 
    document.body.appendChild(scr);
 
    // Width of the inner div sans scrollbar
    wNoScroll = inn.offsetWidth;
    // Add the scrollbar
    scr.style.overflow = 'auto';
    // Width of the inner div width scrollbar
    wScroll = inn.offsetWidth;
 
    // Remove the scrolling div from the doc
    document.body.removeChild(
    document.body.lastChild);
 
    // Pixel width of the scroller
    return (wNoScroll - wScroll);    }
    return 0;
  }

})(jQuery);
