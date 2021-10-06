var elem = document.querySelector('.grid-slider-wrap');

var flkty = new Flickity( elem, {
  // options
  cellAlign: 'center',
  contain: true,
  groupCells: 2,
  wrapAround:true,
  pageDots: false
});
// element argument can be a selector string
//   for an individual element
// var flkty = new Flickity( '.grid-slider-wrap', {
  // options
// });



var elemtwo = document.querySelector('.grid-slider-wrap-two');
var flkty = new Flickity( elemtwo, {
  // options
  cellAlign: 'center',
  contain: true,
  groupCells: 2,
  wrapAround:true,
  pageDots: false
});

var elemthree = document.querySelector('.grid-slider-wrap-three');
var flkty = new Flickity( elemthree, {
  // options
  cellAlign: 'center',
  contain: true,
  groupCells: 2,
  wrapAround:true,
  pageDots: false
});