let add = function (x, y) {
    return x + y;
};
console.log(add);
let result = add(3, 4);
console.log(result);
let i=500
function outer() {
    let i = 100;
    let s="hello"
    console.log("inside function outer");
    console.log(i);
    function inner() {
        console.log(s)
        let k = 50;
        console.log("inside function inner");
        console.log(k);
    }
    inner();
}
outer();
console.log(i)
