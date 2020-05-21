const getFirstElementByTagFromBody = tag => document.body.getElementsByTagName(tag)[0];

const toggleClassOnScroll = (
  targetElement,
  scrollTargetId,
  onScrollClass,
  effectHeight = window.innerHeight * 0.7
) => {
  const targetScroller = scrollTargetId
    ? document.getElementById(scrollTargetId).scrollTop
    : window.scrollY;

  if (targetScroller > effectHeight) {
    getFirstElementByTagFromBody(targetElement).classList.remove(onScrollClass);
    getFirstElementByTagFromBody(targetElement).classList.add(onScrollClass);
  } else {
    getFirstElementByTagFromBody(targetElement).classList.add(onScrollClass);
    getFirstElementByTagFromBody(targetElement).classList.remove(onScrollClass);
  }
};

useEffect(() => {
  const scrollTargetEl = scrollTargetId ? document.getElementById(scrollTargetId) : window;

  if (changeColorOnScroll) {
    scrollTargetEl.addEventListener('scroll', headerColorChange);
  }
  return function cleanup() {
    if (changeColorOnScroll) {
      scrollTargetEl.removeEventListener('scroll', headerColorChange);
    }
  };
});

const timelineBlocks = $('.cd-timeline-block');
const offset = 0.8;

// hide timeline blocks which are outside the viewport
hideBlocks(timelineBlocks, offset);

// on scolling, show/animate timeline blocks when enter the viewport
$(window).on('scroll', function() {
  !window.requestAnimationFrame
    ? setTimeout(function() {
      showBlocks(timelineBlocks, offset);
    }, 100)
    : window.requestAnimationFrame(function() {
      showBlocks(timelineBlocks, offset);
    });
});

function hideBlocks(blocks, offset) {
  blocks.each(function() {
    $(this).offset().top > $(window).scrollTop() + $(window).height() * offset &&
      $(this)
        .find('.cd-timeline-img, .cd-timeline-content')
        .addClass('is-hidden');
  });
}

function showBlocks(blocks, offset) {
  blocks.each(function() {
    $(this).offset().top <= $(window).scrollTop() + $(window).height() * offset &&
      $(this)
        .find('.cd-timeline-img')
        .hasClass('is-hidden') &&
      $(this)
        .find('.cd-timeline-img, .cd-timeline-content')
        .removeClass('is-hidden')
        .addClass('bounce-in');
  });
}

// Smooth scrolling using jQuery easing
$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
    location.hostname == this.hostname
  ) {
    let target = $(this.hash);
    target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
    if (target.length) {
      $('html, body').animate(
        {
          scrollTop: target.offset().top - 70
        },
        1000,
        'easeInOutExpo'
      );
      return false;
    }
  }
});

// Scroll to top button appear
$(document).scroll(function() {
  const scrollDistance = $(this).scrollTop();
  if (scrollDistance > 100) {
    $('.scroll-to-top').fadeIn();
  } else {
    $('.scroll-to-top').fadeOut();
  }
});

// Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll-trigger').click(function() {
  $('.navbar-collapse').collapse('hide');
});

// Activate scrollspy to add active class to navbar items on scroll
$('body').scrollspy({
  target: '#mainNav',
  offset: 80
});

// Collapse Navbar
const navbarCollapse = function() {
  if ($('#mainNav').offset().top > 100) {
    $('#mainNav').addClass('navbar-shrink');
  } else {
    $('#mainNav').removeClass('navbar-shrink');
  }
};
// Collapse now if page is not at top
navbarCollapse();
// Collapse the navbar when page is scrolled
$(window).scroll(navbarCollapse);

jQuery(document).ready(function($) {
  const timelineBlocks = $('.cd-timeline-block');
  const offset = 0.8;

  // hide timeline blocks which are outside the viewport
  hideBlocks(timelineBlocks, offset);

  // on scolling, show/animate timeline blocks when enter the viewport
  $(window).on('scroll', function() {
    !window.requestAnimationFrame
      ? setTimeout(function() {
        showBlocks(timelineBlocks, offset);
      }, 100)
      : window.requestAnimationFrame(function() {
        showBlocks(timelineBlocks, offset);
      });
  });

  function hideBlocks(blocks, offset) {
    blocks.each(function() {
      $(this).offset().top > $(window).scrollTop() + $(window).height() * offset &&
        $(this)
          .find('.cd-timeline-img, .cd-timeline-content')
          .addClass('is-hidden');
    });
  }

  function showBlocks(blocks, offset) {
    blocks.each(function() {
      $(this).offset().top <= $(window).scrollTop() + $(window).height() * offset &&
        $(this)
          .find('.cd-timeline-img')
          .hasClass('is-hidden') &&
        $(this)
          .find('.cd-timeline-img, .cd-timeline-content')
          .removeClass('is-hidden')
          .addClass('bounce-in');
    });
  }
});
