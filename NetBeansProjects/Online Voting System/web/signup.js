function changeTab(evt, val) {
  let navButton = document.getElementsByClassName("nav-btns"),
    contentPages = document.getElementsByClassName("content");
  for (let i = 0; i < contentPages.length; i++) {
    contentPages[i].style.display = "none";
  }
  document.getElementById(val).style.display = "block";

  navButton[0].style.borderButtom = "";
  /*
  for (let i = 0; i < navButton.length; i++) {
    navButton[0].style.borderButtom = "";
  }
  evt.currentTarget.style.borderBottom = "5px solid #460d86";*/
}