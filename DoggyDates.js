function openTab(evt, tabName) {
  var i;
  var tabcontent;
  console.log(evt);

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  document.getElementById(tabName).style.display = "block";
}

function openDefault() {
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 1; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
}