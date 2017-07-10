$(".gallery").masonry({
  itemSelector: ".thumbnail",
  columnWidth: ".thumbnail",
  percentPosition: true
});
// creates a responsive layout


// $(".touchevents .thumbnail").hammer().bind("press", function() {
// 	var query = Modernizr.mq('(max-width: 800px)');
// 	if (query) {
// 		$('.thumbnail').addClass('.open')
// 	}
// });

// $(".touchevents .thumbnail").hammer().bind("swipe", function() {
// 	var query = Modernizr.mq('(max-width: 800px)');
// 	if (query) {
// 		$('.thumbnail').removeClass('.open')
// 	}
// });

$('.thumbnail a').simpleLightbox( { overlay: false, closeText: 'X'});