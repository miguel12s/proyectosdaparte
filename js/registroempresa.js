let comprobar=()=>{
    let a= document.getElementById("exampleDropdownFormEmpresa").value
    let b= document.getElementById("exampleDropdownFormEmail1").value
    let c= document.getElementById("exampleDropdownFormPassword1").value
    let d= document.getElementById("exampleDropdownFormTelefono").value
    alert("hola")
    if (a==""||b=="" ||c=="" ||d=="" ){
     alert("los campos estan vacio")
    }else{
     alert("bienvenido "+a)
    }
}