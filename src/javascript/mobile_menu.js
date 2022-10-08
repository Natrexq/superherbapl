const Roll = (function () {
  let callbut = document.querySelector("#menu");
  let exit = document.querySelector("#exit");

  var rollmenu = document.getElementById("rlmenu");
  rollmenu.style.display = "none";

  const MenuStyles = (x) => {
    if (x == 1) {
      function Show() {
        rollmenu.style.transition = "opacity 400ms";

        rollmenu.style.display = "flex";
        setTimeout(() => {
          rollmenu.style.opacity = "1";
        }, 410);
      }
      return Show();
    } else {
      function Hide() {
        rollmenu.style.transition = "opacity 300ms";

        setTimeout(() => {
          rollmenu.style.opacity = "0";
          setTimeout(() => {
            rollmenu.style.display = "none";
          }, 350);
        }, 310);
      }
      return Hide();
    }
  };

  const CheckMenuStatus = () => {
    let istrue = rollmenu.style.display;
    if (istrue === "none") {
      MenuStyles(1);
    } else {
      MenuStyles(2);
    }
  };

  const CheckRes = (event) => {
    let res = window.screen.width;

    if (res < 800) {
      CheckMenuStatus();
    } else {
      //
      event.preventDefault();
    }
  };
  callbut.addEventListener("click", CheckRes);
  exit.addEventListener("click", CheckRes);
})();
