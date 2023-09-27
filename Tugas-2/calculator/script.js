function hitung()
{
    var num1 = parseFloat(document.fform.bilangan1.value); 
    if (isNaN (num1))
    num1=0.0    
    var num2 = parseFloat(document.fform.bilangan2.value); 
    if (isNaN (num2))
    num2=0.0
    var operator = document.fform.operator.value;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Masukkan bilangan yang valid.");
        return;
    }

    var hasil;
    switch (operator) {
        case "+":
            hasil = num1 + num2;
            break;
        case "-":
            hasil = num1 - num2;
            break;
        case "*":
            hasil = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Pembagian oleh nol tidak diizinkan.");
                return;
            }
            hasil = num1 / num2;
            break;
        default:
            alert("Operator tidak valid.");
            return;
    }

    alert("Hasil operasi " + operator + " adalah " + hasil);
}