// Gắn onclick cho nút button
function sapxeps() {
    // B1 : DOM tới các input và lấy giá trị của nó
    //Giá trị lấy được trên Html có kiểu dữ liệu string
    //Nếu   muốn giá trị là 1 con số, ta cần ép kiểu về number
    // Thêm dấu + ở đầu
    var one = +document.getElementById("one").value;
    var two = +document.getElementById("two").value;
    var three = +document.getElementById("three").value;
    var array = [];
    array.push(one)
    array.push(two)
    array.push(three)
    array.sort()
    console.log(array)
    document.getElementById("ketQua").style.display = "block";
    document.getElementById("ones").innerHTML = array[0];
    document.getElementById("twos").innerHTML = array[1];
    document.getElementById("threes").innerHTML = array[2];
  }



