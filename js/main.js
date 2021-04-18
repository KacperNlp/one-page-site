import { navigation } from "./components/Navigation.js";

const initAll = () => {
  navigation.init();
};

initAll();

window.addEventListener("resize", initAll);
