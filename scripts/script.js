

/*
const header = document.querySelector('.header');
let prevScrollPos = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos && currentScrollPos > 0) {
        // Scrolling to top
        header.style.padding_block = '20';
        header.style.top = '0';
        header.style.backgroundColor = 'hsla(40, 12%, 5%, 1)';
        header.classList.add('active');
    } else {
        // Scrolling to bottom or at top
        header.style.backgroundColor = 'transparent';
        header.classList.remove('active');
    }

    prevScrollPos = currentScrollPos;
});

*/

const header = document.querySelector("[data-header]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  const isScrollTop = window.scrollY === 0;

  if (isScrollBottom) {
    header.style.paddingBlock = '0';
    header.style.top = '10px';
    header.style.backgroundColor = 'hsla(40, 12%, 5%, 1)';
    header.classList.add("active", "hide");
  } else if (isScrollTop) {
    header.style.paddingBlock = '40px';
    header.style.top = '10px';
    header.style.backgroundColor = 'transparent';
    header.classList.remove("hide");
  } else {
    header.style.paddingBlock = '10px';
    header.style.top = '0';
    header.style.backgroundColor = 'hsla(0, 0%, 13%, 1)';
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
};

window.addEventListener("scroll", hideHeader);