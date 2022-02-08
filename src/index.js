import "./scss/importer.scss";
import MmenuLight from "mmenu-light";

document.addEventListener("DOMContentLoaded", () => {
  const menu = new MmenuLight(
    document.querySelector("#menu"),
    "(max-width: 991px)"
  );

  const navigator = menu.navigation();
  const drawer = menu.offcanvas();

  document
    .querySelector("a[href='#menu']")
    .addEventListener("click", (evnt) => {
      evnt.preventDefault();
      drawer.open();
    });
  document.querySelector("#menu").style.display = "block";
});
