const inputBox = document.getElementById("input-box");

const liscontainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("you must add some task in it");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    // console.log(li);
    liscontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  savedata();
}

liscontainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      savedata();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savedata();
    }
  },
  false
);

function savedata() {
  localStorage.saveItem("data", liscontainer.innerHTML);
}

function showTask() {
  liscontainer.innerHTML = localStorage.getItem("data");
}

showTask();
