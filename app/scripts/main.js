$(function () {
  $('[data-toggle="popover"]').popover()
});


$('resumeDwnld').click(function(e) {
    e.preventDefault();  //stop the browser from following
    window.location.href = 'Resume_Sumeer Tuli.pdf';
});





// calculating todays date start
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = mm+'/'+dd+'/'+yyyy;
// console.log("date: "+today);

// calculating todays date end

// calculating month start
var months;
function monthDiff(d1, d2) {
    
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
    
}


monthDiff(
    new Date(2015, 8, 28),  // March 12th, 2010
    new Date(yyyy, mm, dd)  // January 1st, 2010
);

// console.log("months: "+months)

$("#magnifitime").html("("+months+" months)")
// calculating months end


//slider

      $(function () {
        // This function runs before the slide transition starts
        var switchIndicator = function ($c, $n, currIndex, nextIndex) {
          // kills the timeline by setting it's width to zero
          $timeIndicator.stop().css('width', 0);
          // Highlights the next slide pagination control
          $indicators.removeClass('current').eq(nextIndex).addClass('current');
        };

        // This function runs after the slide transition finishes
        var startTimeIndicator = function () {
          // start the timeline animation
          $timeIndicator.animate({width: '100%'}, slideInterval);
        };

        var $box = $('#box')
          , $indicators = $('.goto-slide')
          , $effects = $('.effect')
          , $timeIndicator = $('#time-indicator')
          , slideInterval = 5000
          , defaultOptions = {
                speed: 1200
              , autoScroll: true
              , timeout: slideInterval
              , next: '#next'
              , prev: '#prev'
              , pause: '#pause'
              , onbefore: switchIndicator
              , onafter: startTimeIndicator
            }
          , effectOptions = {
              'blindLeft': {blindCount: 15}
            , 'blindDown': {blindCount: 15}
            , 'tile3d': {tileRows: 6, rowOffset: 80}
            , 'tile': {tileRows: 6, rowOffset: 80}
          };

        // initialize the plugin with the desired settings
        $box.boxSlider(defaultOptions);
        // start the time line for the first slide
        startTimeIndicator();

        // Paginate the slides using the indicator controls
        $('#controls').on('click', '.goto-slide', function (ev) {
          $box.boxSlider('showSlide', $(this).data('slideindex'));
          ev.preventDefault();
        });

        // This is for demo purposes only, kills the plugin and resets it with
        // the newly selected effect

        // $('#effect-list').on('click', '.effect', function (ev) {
          $(document).ready(function (ev) {
          var $effect = $(this)
            // , fx = $effect.data('fx')
            , fx = 'scrollHorz3d'
            , extraOptions = effectOptions[fx];
            // console.log($effect)
            // console.log(fx)
          $effects.removeClass('current');
          $effect.addClass('current');
          switchIndicator(null, null, 0, 0);
          $box.boxSlider('destroy').boxSlider($.extend({effect: fx}, defaultOptions, extraOptions));
          startTimeIndicator();

          // ev.preventDefault();
        });
      });
