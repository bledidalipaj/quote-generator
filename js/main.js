$(document).ready(function() {
  var $body = $('body'),
      $icons = $('.logo i'),
      $newQuoteBtn = $('#new-quote');

  $('#new-quote').on('click', function(e) {
    e.preventDefault();
    $.ajax({
      url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift();        // The data is an arrray of posts. Grab the first one.
        var postTitle = post.title;
        var postContent = post.content;

        // Change background-color and color
        var newColor = generateRandomHexadecimalColor();
        setColor([$body], 'color', newColor);
        setColor([$body, $icons, $newQuoteBtn], 'background-color', newColor);

        $('#quote').html(postContent);
        $('#author').text(postTitle);

        $('#twitter').attr('href', 'https:twitter.com/intent/tweet?hashtags=quotes&text=' + (postContent + ' ' + postTitle));
        console.log('https:twitter.com/intent/tweet?hashtags=quotes&text=' + (postContent + ' ' + postTitle));
      },
      cache: false
    });                                 // END json call
  });                                  // END event handler
});

/**
 * Generates and returns a random hexadecimal color
 *
 * @return {String}
 */

function generateRandomHexadecimalColor() {
  var digitsArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'],
      color       = '#',
      randomIndex = null;

  for (var i = 0; i < 6; i++) {
    randomIndex = Math.floor(Math.random() * digitsArray.length);
    color += digitsArray[randomIndex];
  }

  return color;
};

/**
 * Sets the color or the background-color of  an HTML element to newColor.
 *
 * property:
 *  - color
 *  - background-color
 *
 * @param {Array} elements - Array of jQuery objects
 * @param {String} property
 * @param {String} newColor
 *
 */

function setColor(elements, property, newColor) {
  elements.forEach(function(element) {
    element.css(property, newColor);
  });
};
