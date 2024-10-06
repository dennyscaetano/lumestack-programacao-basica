function compararNumeros(num1, num2) {
    if (num1 < num2) {
        return "Numero 2 é maior"
    } else if (num1 == num2) {
        return "Os números são iguais"
    } else {
        return "Numero 1 é maior"
    }
}

console.log(compararNumeros(30, 30))