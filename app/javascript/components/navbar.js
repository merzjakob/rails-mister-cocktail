const HideNavbarOnScroll = () => {
  const prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    const currentScrollpos = window.pageYOffset;
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
