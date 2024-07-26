$(document).on('scroll', function () {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $('.tag');

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    if ($(tag).position().top < pageBottom) {
      $(tag).addClass('visible');
    } else {
      $(tag).removeClass('visible');
    }
  }
});

const prev = document.getElementById('prev-btn');
const next = document.getElementById('next-btn');
const list = document.getElementById('item-list');

const itemWidth = 150;
const padding = 10;

prev.addEventListener('click', () => {
  list.scrollLeft -= itemWidth + padding;
});

next.addEventListener('click', () => {
  list.scrollLeft += itemWidth + padding;
});
