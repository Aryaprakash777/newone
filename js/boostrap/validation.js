function validate(){
    let name=document.getElementById("exampleInputEmail1")
    

    if(name.value==""){
        alert("name field can't be empty")
        name.focus()
        return false
    }
}