const callBalloon = () => {
  const { color, changeColorOnScroll } = props;
  const targetScroller = changeColorOnScroll.scrollTargetId
    ? document.getElementById(changeColorOnScroll.scrollTargetId).scrollTop
    : window.scrollY;

  const effectHeight = changeColorOnScroll.height || window.innerHeight * 0.7;

  if (targetScroller > effectHeight) {
    document.body.getElementsByTagName('header')[0].classList.remove(classes[color]);
    document.body
      .getElementsByTagName('header')[0]
      .classList.add(classes[changeColorOnScroll.color]);
  } else {
    document.body.getElementsByTagName('header')[0].classList.add(classes[color]);
    document.body
      .getElementsByTagName('header')[0]
      .classList.remove(classes[changeColorOnScroll.color]);
  }
};

useEffect(() => {
  const { changeColorOnScroll } = props;
  const scrollTargetEl = changeColorOnScroll.scrollTargetId
    ? document.getElementById(changeColorOnScroll.scrollTargetId)
    : window;

  if (changeColorOnScroll) {
    scrollTargetEl.addEventListener('scroll', headerColorChange);
  }
  return function cleanup() {
    if (changeColorOnScroll) {
      scrollTargetEl.removeEventListener('scroll', headerColorChange);
    }
  };
});
