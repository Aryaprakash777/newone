function calculation(a,b,op){
    if(op=="n"){
       
        console.log (a+b)
    }
    if(op=="o"){
        
        console.log (a-b)
    }
    if(op=="p"){
        
        console.log (a*b)
    }
    else{
        default:
            console.log("invalid operation")

    }
}
calculation(5,3,"n")
calculation(4,3,"o")
calculation(7,3,"p")
calculation(7,3,"l")