var arr = [];

function scrollToElement1() {
  var element = document.getElementById("Pr2");
  element.scrollIntoView();
}
function scrollToElement2() {
  var element = document.getElementById("Pr3");
  element.scrollIntoView();
}
function scrollToElement3() {
  var element = document.getElementById("Pr4");
  element.scrollIntoView();
}
function save(e) {
  var cst = document.getElementById(e).value;
  arr.push(cst)
  alert(arr)
}
function save1(e) {
  var cst = document.getElementById(e).value;
  arr.push(cst)
  localStorage.setItem("myStorage",JSON.stringify(arr))
}

function sendDataToJSON(e) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "savejson.php", true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      console.log("Данные сохранены!");
    } else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status !== 200) {
      console.error("Ошибка сохранения данных!");
    }
  }; xhr.send(JSON.stringify(e));
}