void function(win) {

  const Sticky = (el, type) => {

    const position = window.getComputedStyle(el).position;

    if (position === '-webkit-sticky' || position === 'sticky') return;

    const newEl = document.createElement('div');
    newEl.style.height = el.offsetHeight + 'px';
    newEl.style.visibility = 'hidden';

    let isFixed = false;
    const targetTop = el.offsetTop;
    const parentEl = el.parentElement;

    const scrollEvent = () => {
      if (!isFixed && window.pageYOffset >= targetTop) {
        isFixed = true;
        el.style.position = 'fixed';
        parentEl.insertBefore(newEl, el);
      }

      if (isFixed && window.pageYOffset < targetTop) {
        isFixed = false;
        el.style.position = null;
        parentEl.removeChild(newEl);
      }
    };

    window[type + 'EventListener']('scroll', scrollEvent);
  };

  win.Sticky = Sticky;

}(window);
