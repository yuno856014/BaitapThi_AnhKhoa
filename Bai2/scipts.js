let value = +prompt("nhập số nguyên cần xóa");
let arr = [12, 33,13,53,86,31,21]
function tryRemoveFromArray(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        let index = arr.indexOf(value);
        if (index >= 0) {
            arr.splice(index, 1);
        }
    }
    return arr;
}
document.write(` mảng các số nguyên là :${arr} <br>`);
let remove = tryRemoveFromArray(arr, value);
document.write(`mảng trả về : ${remove}`);