function HelloWorld() {
  alert("HelloWorld");
}

function display(keyPressed) {
  //   alert(keyPressed);
  document.getElementById("output").value += keyPressed;
  // document.getElementById("output").value =
  //   document.getElementById("output").value + keyPressed;
}

function equal(type) {
  document.getElementById("output").value = eval(
    document.getElementById("output").value
  );
}

function clr(type1) {
  document.getElementById("output").value = "";
}

function clr1(type2) {
  // document.getElementById("output").value = toString().slice(0,-1)(document.getElementById("output").value)
  let input = String(document.getElementById("output").value);
  document.getElementById("output").value = input.substring(0, input.length-1);
}
