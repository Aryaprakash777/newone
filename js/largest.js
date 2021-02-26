let a=100;let b=15;let c=12;
if(a>=b && a>=c){
    console.log("a is larger",a)
}
 else if(b>=a && b>=c){
     console.log("b is larger")
 }
 else
 {
     console.log("c is larger")
 }
 console.log("after if-else block ")
 let choice="*"
 switch(choice){
     case "+":{
         console.log(a+b)
         break
     }
     case "-":{
         console.log(a-b)
        break
        }
        default:
            console.log("invalid operation")

 }