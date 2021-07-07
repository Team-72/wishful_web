var modalOne = document.getElementById("modalOne");
var firstBtn = document.getElementById("firstBtn");
var closeOne = document.getElementsByClassName("close-one")[0];

firstBtn.onclick = function() {
  modalOne.style.display = "block";
}

closeOne.onclick = function() {
  modalOne.style.display = "none";
}
  
window.onclick = function(event) {
  if (event.target == modalOne) {
    modalOne.style.display = "none";
  }
}



var modalTwo = document.getElementById("modalTwo");
var secondBtn = document.getElementById("secondBtn");
var closeTwo = document.getElementsByClassName("close-two")[0];

secondBtn.onclick = function() {
  modalTwo.style.display = "block";
}

closeTwo.onclick = function() {
  modalTwo.style.display = "none";
}
