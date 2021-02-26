function newElement(){
var word=document.getElementById("word").value
var content=document.getElementById("content").value
console.log(word)
console.log(content)
let regex=new RegExp(word,"g")
//document.getElementById("newcontent").innerHTML=content
let s=content.replace(regex,"<span style='background-color:yellow'>"+word+"</span>")
document.getElementById("newcontent").innerHTML=s
}