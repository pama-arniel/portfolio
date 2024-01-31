const ScrollTransitionDirective = {
  inserted(el, binding) {
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const windowWidth =
        window.innerWidth || document.documentElement.clientWidth;

      // Check if any part of the element is within the viewport
      const isInsideVertical = rect.top < windowHeight && rect.bottom > 0;
      const isInsideHorizontal = rect.left < windowWidth && rect.right > 0;

      return isInsideVertical && isInsideHorizontal;
    }

    function handleScroll() {
      if (isInViewport(el) && !el._scrollTransitionVisible) {
        el._scrollTransitionVisible = true;
        el.classList.add(binding?.value ?? 'animated-entrance'); // Add transition class
        window.removeEventListener("scroll", handleScroll); // Remove event listener after transition
      }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on initial render
  },
};

export default ScrollTransitionDirective;
