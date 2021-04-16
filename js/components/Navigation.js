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
  }

  init() {
    const { innerWidth } = window;
    if (innerWidth < 1024)
      this.bars.addEventListener("click", this.handleBarsClick);
  }

  handleBarsClick = () => {
    const { barsClass, navClass } = CLASSES_FOR_BAR_AND_NAV;

    this.bars.classList.toggle(barsClass);
    this.navigation.classList.toggle(navClass);
  };
}

export const navigation = new Navigation();
