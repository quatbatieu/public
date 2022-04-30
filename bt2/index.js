function famely() {
  var name = document.getElementById("home").value;
  if (name == "B") {
    document.getElementById("ketQua").innerHTML = "Xin chào Bố";
  } else if (name == "M") {
    document.getElementById("ketQua").innerHTML = "Xin chào Mẹ";
  } else if (name == "A") {
    document.getElementById("ketQua").innerHTML = "Xin chào Anh Trai";
  } else {
    document.getElementById("ketQua").innerHTML = "Xin chào Em Gái";
  }
}
