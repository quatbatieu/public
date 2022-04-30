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
    array.push(one);
    array.push(two);
    array.push(three);
    console.log(array);
    var count = 0;
    var odd = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i]%2==0){
            count++
        }else {
            odd = array.length - count;
        }
    }
    document.getElementById('ketQua').innerHTML = `có ${count} số chẵn và  ${odd} số lẻ`
}
