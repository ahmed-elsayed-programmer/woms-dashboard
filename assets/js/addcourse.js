document.getElementById("button").onclick = function() {
    var section = document.getElementById("addModule");
    section.appendChild(section.cloneNode(true));
  }
  