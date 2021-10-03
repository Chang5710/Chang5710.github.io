function alerts() {
  alert("Hello, world!");
}

function bigger() {
  alerts();
  document.getElementById("inputText").style.fontSize = "24pt";
}

function fancyS() {
  var check = document.getElementById("fancyS");
  var inputText = document.getElementById("inputText");
  if (check.checked) {
    alerts();
    inputText.style.fontWeight = "bold";
    inputText.style.color = "blue";
    inputText.style.textDecoration = "underline blink";
  }
}

function boringB() {
  var check = document.getElementById("boringB");
  var inputText = document.getElementById("inputText");
  if (check.checked) {
    inputText.style.fontWeight = "normal";
    inputText.style.color = "black";
    inputText.style.textDecoration = "none";
  }
}

function moo() {
  var suffix = "-Moo";
  inputText = document.getElementById("inputText");
  inputText.style.textTransform = "uppercase";
  inputText.value = inputText.value.split(".").join("") + suffix;
}
