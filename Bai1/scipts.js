let arr = [7,9,8,10,6];
function findMax(){
    let max = arr[0];
    for(let i = 1 ; i < arr.length ; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}document.write(findMax())