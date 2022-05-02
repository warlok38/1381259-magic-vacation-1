export default () => {
  let elems = document.querySelectorAll(`.js-menu-link`);
  let contentFilling = document.querySelector(`.content-filling`);

  elems.forEach(function (elem) {
    function onLinkClicked(event) {
      let prev = window.location.hash;
      let current = event.currentTarget.href;

      if (prev.includes(`story`) && current.includes(`prizes`)) {
        event.preventDefault();
        contentFilling.classList.add(`content-filling--fill`);
        setTimeout(onAnimationComplete, 400);
      }
    }

    function onAnimationComplete() {
      window.location = elem.href;
      contentFilling.classList.remove(`content-filling--fill`);
    }

    elem.addEventListener(`click`, onLinkClicked);
  });
};
