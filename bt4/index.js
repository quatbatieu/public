// Gắn onclick cho nút button
function tinhtoan() {
  // B1 : DOM tới các input và lấy giá trị của nó
  //Giá trị lấy được trên Html có kiểu dữ liệu string
  //Nếu   muốn giá trị là 1 con số, ta cần ép kiểu về number
  // Thêm dấu + ở đầu
  var one = +document.getElementById("edgea").value;
  var two = +document.getElementById("edgeb").value;
  var three = +document.getElementById("edgec").value;
  var anpha = (one*one) + (two*two)
  var beta = (three*three)
  /** B2 ; process
   * edgea = edgeb : tam giác cân
   * edgea = edgeb = edgec : tam giác đều
   * (edgea*edgea) + (edgeb*edgeb) = (edgec*edgec)
   */
  if (one == two && one == three && two == three){
    document.getElementById("ketQua").innerHTML = "Tam Giác Đều";
  }else if(one == two || two == three || one == three){
    document.getElementById("ketQua").innerHTML = "Tam Giác Cân";
  }else if(anpha == beta){
    document.getElementById("ketQua").innerHTML = "Tam Giác Vuông";
  }else{
    document.getElementById("ketQua").innerHTML = "Tam Giác Thường";
  }
}
