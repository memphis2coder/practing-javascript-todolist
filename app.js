// add x to each li
var li = document.getElementsByTagName("li");
for (let i = 0; i < li.length; i++) {
    var span = document.createElement('span');
    var txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    li[i].appendChild(span);
}

// click a close button to hide the current list
var close = document.getElementsByClassName('close');
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

// add a check symbol when clicking a item
var list = document.querySelector('ul');
list.addEventListener('click', function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
}, false);


// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
}