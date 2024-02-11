document.getElementById("button").onclick = function() {
    var container = document.getElementById("container");
    var section = document.getElementById("addModule");
    container.appendChild(section.cloneNode(true));
  }
  