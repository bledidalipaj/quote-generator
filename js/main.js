$(document).ready(function() {
  $author = $('#author'),
      $body = $('body'),
      $icons = $('.twitter-logo i'),
      $newQuoteBtn = $('#new-quote-btn'),
			$quote = $('#quote'),
      $quoteContent = $('#quote span.quote-content')
      $twitterBtn = $('#twitter-btn');
	
  $newQuoteBtn.on('click', main);
});

function main() {
  var apiUrl = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';
  $.ajax({
    url: apiUrl,
    beforeSend: function() {
      $('#loader').show();             // Show the loader image
    },
    success: function(data) {
      var quote = data.shift();        // The data is an arrray of posts. Grab the first one.
      var quoteAuthor = quote.title;
      var quoteContent = quote.content;

      // Remove the p tag, that surrounds the quoteContent
      quoteContent = quoteContent.replace('<p>', '').replace('</p>', '');

      // Change background-color and color
      var newColor = generateRandomHexadecimalColor();
      setColor([$body], 'color', newColor);
      setColor([$body, $icons, $newQuoteBtn], 'background-color', newColor);

      $quote.hide(100);
      $quoteContent.html(quoteContent);
      $quote.show(1000);

      $('#loader').hide();             // Hide the loader image

      $author.hide(1000);
      $author.html(quoteAuthor);
      $author.show(1000);
			
			// shorten quote content to fit available twitter chars (140)
			quoteContent = shortenText(quoteContent, [quoteAuthor || '', '#quotes']);
			// Encode quote content in order to be used in a url
			quoteContent = encodeURIComponent(quoteContent);

			var tweetUrl = 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + ( '"' + quoteContent + '"'+ ' ' + quoteAuthor);
      $twitterBtn.attr('href', tweetUrl);
    },
    cache: false
  });                                 // END ajax call
};

/**
 * Generates and returns a random hexadecimal color
 *
 * @return {String}
 */

function generateRandomHexadecimalColor() {
  var digitsArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'],
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


/**
 * Shorten given text to fit in the available space.
 *
 *
 * @param {String} text
 * @param {Array} mandatoryText
 * @param {Number} availableChars - availableChars default value 140
 * @return {String}
 * 
 */
function shortenText(text, mandatoryText, availableChars=140) {
	var quotesLength = 2,
			whiteSpace   = 2;
	availableChars -= (text.length + quotesLength + whiteSpace);
	
	for (var i=0; i<mandatoryText.length; i++) {
		availableChars -= mandatoryText[i].length;
	}
	
	if (availableChars >= 0) {
		return text;
	} else {
		// Remove extra characters
		text = text.slice(0, availableChars);
		// Remove 3 more characters in order to replace them with '...'
		text = text.slice(0, -3);
		// Remove white space from both sides of the string
		text = text.trim();
		// Add '...'
		text = text + '...';
		
		return text;
	}
}
