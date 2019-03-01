const HideNavbarOnScroll = () => {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    let currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      navbar.classList.add('navbar-wagon-hide')
    }
    else {
        navbar.classList.remove('navbar-wagon-hide');
      }
       prevScrollpos = currentScrollpos
  }
}

export { HideNavbarOnScroll };
