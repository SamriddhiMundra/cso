function countVow(str){
    let count = 0;
    for (const element of str) {
        if(element ==="a"|| element==="e"||element==="i"||element==="o"||element==="u"){
            count++;
        }
    }
    console.log(count);
}
countVow("Samriddhi");
let arr = [1, 2, 3, 4, 5];
arr.forEach((element) => {
    console.log(element**2);
});
let calcSq = (num)=>{
    console.log(num*num);
}
arr.forEach(calcSq);

let newArr = arr.map((val)=>{
    return val**3;
})
console.log(newArr);
let filterarr = arr.filter((value)=>{
    return value%2===0;
})
console.log(filterarr);
let marks = [55, 77, 88, 67];
const output = marks.reduce((prev, curr)=>{
    return prev>curr?prev:curr;
})
console.log(output);

let stumarks = [22, 55, 67, 90, 45, 99, 78, 40, 96, 100, 39];
const aone = stumarks.filter((val)=>{
    return val>=90;
})
console.log(aone);