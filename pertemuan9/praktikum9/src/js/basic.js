
// function no 1

function hitungLingkaran() {
    var radius = document.getElementById('radius').value;
    if(radius > 0){
        var luas = 3.14 * radius * radius;
        var keliling = 2 * 3.14 * radius;
        document.getElementById("hasil").innerText= "Luas : " + luas.toFixed(2) + "cm² dan kelilingnya " + keliling + " cm"
    }else{
        document.getElementById("hasil").innerText = "Masukkan jari - jari yang valid"
    }
}

// function no 2 

function hitungRupiah(){
    var rupiah = parseFloat(document.getElementById('rupiah').value);
    if(rupiah > 0){
        var kurs = 15870;
        var dollar = rupiah / kurs;
        document.getElementById("hasil").innerText = "Nilai : $ " + dollar.toFixed(2)
        console.log(dollar);
         
    }else{
        document.getElementById("hasil").innerText = "Masukkan jumlah rupiah yang valid"
    }
}


// function no 3
function hitungJumlah() {
    var bil1 = document.getElementById('bil1').value;
    var bil2 = document.getElementById('bil2').value;
    if (bil1 !== "" && bil2 !== "") {
        var jumlah = parseFloat(bil1) + parseFloat(bil2);
        document.getElementById("hasil").innerText = "Jumlah : " + jumlah;
    } else {
        document.getElementById("hasil").innerText = "Masukkan bilangan yang valid";
    }
}
