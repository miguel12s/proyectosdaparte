let comprobar=()=>{
   let a= document.getElementById("exampleDropdownFormName").value
   let b= document.getElementById("exampleDropdownFormApellidos").value
   let c= document.getElementById("exampleDropdownFormTelefono").value
   let d= document.getElementById("exampleDropdownFormEmail1").value
   let e= document.getElementById("exampleDropdownFormPassword1").value
    
   if (a==""||b=="" ||c=="" ||d=="" ||e==""){
    alert("los campos estan vacio")
   }else{
    let c=a+b
    alert("bienvenido "+c)
   }
   
}