function isFibonacci(number) {
    let number0 = 0;
    let number1 = 1;
    let temp;
    while (number1 <= number) {
        if (number0 + number1 === number) {
            return true;
        };
        temp = number0;
        number0 = number1;
        number1 += temp;
    };
    return false;
}
document.write(isFibonacci(4))



