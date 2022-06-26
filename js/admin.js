




let funcion = () => {
      var username,password
    username = document.getElementById("exampleDropdownFormEmail1").value
     password = document.getElementById("exampleDropdownFormPassword1").value
    if (username =="Miguel@tugato.com" && password == "1234") {
        alert("bienvenido Miguel")
        window.location="adminMiguel.html"
    }else{
            if(username=="Harry@tugato.com"&& password=="5678"){
                alert("bienvenido harry")
                window.location="AdminHarry.html"
            }
    }

}
let comprobar=()=>{
    let a = document.getElementById("exampleDropdownFormEmail1").value
    let b = document.getElementById("exampleDropdownFormPassword1").value
    if (a ==""||b=="" ){
alert("Asegurese de llenar todos los campos")

}
}
function redirharry(){
    
    location.href=("AdminHarry.html")
    

}
  




