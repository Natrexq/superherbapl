const func = (function () {
  // Przycisk git
  const gitbutton = document.querySelector("#git");
  const tryitbutton = document.querySelector("#tryit");

  const navh = document.querySelector("#nvh");
  const navw = document.querySelector("#nvw");
  const navc = document.querySelector("#nvc");
  const navp = document.querySelector("#nvp");
  const navt = document.querySelector("#nvt");

  const scrshop = document.querySelector("#shopp");
  const cont = document.querySelector("#cont");

  const Reaction = (x) => {
    switch (x) {
      case 1:
        window.open("https://github.com/Natrexq/superherbapl");
        break;
      case 2:
        scrshop.scrollIntoView();
        break;
      case 3:
        cont.scrollIntoView();
        break;
      default:
        alert("Coś poszło nie tak!");
        break;
    }
  };

  gitbutton.addEventListener("click", function () {
    Reaction(1);
  });
  tryitbutton.addEventListener("click", function () {
    Reaction(2);
  });
  navh.addEventListener("click", function () {
    Reaction(2);
  });
  navw.addEventListener("click", function () {
    Reaction(2);
  });
  navc.addEventListener("click", function () {
    Reaction(3);
  });
  navp.addEventListener("click", function () {
    Reaction(1);
  });
  navt.addEventListener("click", function () {
    Reaction(3);
  });
})();
