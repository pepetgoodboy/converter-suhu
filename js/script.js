function konversi() {
  var celsius = document.getElementById("celsius").value;
  var fahrenheit = (celsius * 9) / 5 + 32;
  let deg = "°";
  if (celsius == "") {
    alert("Masukkan Angka!");
    reset();
  } else {
    document.getElementById("fahrenheit").innerText = fahrenheit;
    document.getElementById("formula").innerText =
      celsius + deg + "C" + " * (9/5) + 32 = " + fahrenheit + deg + "F";
  }
}

function reset() {
  document.getElementById("celsius").value = "";
  document.getElementById("fahrenheit").innerText = "";
  document.getElementById("formula").innerText = "";
}

function reverse() {
  var celsius = document.getElementById("celsius").value;
  var fahrenheit = (celsius * 9) / 5 + 32;
  var reversed = ((fahrenheit - 32) * 5) / 9;
  let deg = "°";
  if (celsius == "") {
    alert("Masukkan Angka!");
    reset();
  } else {
    document.getElementById("celsius").value = reversed;
    document.getElementById("formula").innerText =
      fahrenheit + deg + "F " + "- " + 32 + " * 5/9 = " + celsius + deg + "C";
  }
}
