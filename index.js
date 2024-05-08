// QUESTION 94:
// Map Method:
let arr1 = ["hooriya", "malahim", "hira", "Fareed"];
let lenghtOfArr = arr1.map((elem) => {
    return elem.length;
});
console.log(lenghtOfArr);
// QUESTION 95:
// Filter Method:
let arr2 = [3, 7, 10, 36, 18, 60];
function greaterThanTen(numbers) {
    return numbers.filter((elem) => {
        return elem > 10;
    });
}
console.log(greaterThanTen(arr2));
// QUESTION 96:
//Reduce Method:
let arr = [5, 10, 15, 20];
function sumThenumbers(numbers) {
    return numbers.reduce((total, currentElem) => {
        return total + currentElem;
    }, 0);
}
;
let res = sumThenumbers(arr);
console.log(res);
export {};
