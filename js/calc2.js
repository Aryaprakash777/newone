function calculation(a,b,op){
    let result;
    if(op=="n"){
       
        result= a+b
    }
    if(op=="o"){
        result= a-b
    }
    if(op=="p"){
        
        result=a*b
    }
        
    return result
    }

let data=calculation(5,3,"n")
console.log(data)
let x=calculation(4,3,"o")
console.log(x)
let v=calculation(7,3,"p")
console.log(v)
let m=calculation(7,3,"l")
console.log(m)