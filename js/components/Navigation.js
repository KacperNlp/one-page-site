const BARS_ID = "bars";
const CLASSES_FOR_BAR_AND_NAV = {
  barsClass: "bars--active",
  navClass: "nav--active",
};
const NAV_ID = "nav";

class Navigation {
  constructor() {
    this.bars = document.getElementById(BARS_ID);
    this.navigation = document.getElementById(NAV_ID);
    this.prevScrollValue = 0;
  }

  init() {
    const { innerWidth } = window;
    if (innerWidth < 1024)
      this.bars.addEventListener("click", this.handleBarsClick);
    else window.addEventListener("scroll", this.handleScrollEvent);
  }

  handleBarsClick = () => {
    const { barsClass, navClass } = CLASSES_FOR_BAR_AND_NAV;

    this.bars.classList.toggle(barsClass);
    this.navigation.classList.toggle(navClass);
  };

  handleScrollEvent = () => {
    const { scrollY } = window;
    const { navClass } = CLASSES_FOR_BAR_AND_NAV;

    if (scrollY > this.prevScrollValue || scrollY < 100)
      this.navigation.classList.remove(navClass);
    else this.navigation.classList.add(navClass);

    this.prevScrollValue = scrollY;
  };
}

export const navigation = new Navigation();
