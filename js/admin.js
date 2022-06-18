




let funcion = () => {
      comprobar()
    let username = document.getElementById("exampleDropdownFormEmail1").value
    let password = document.getElementById("exampleDropdownFormPassword1").value
    password = parseInt(password)
    us = "miguelangelsuarezplata480@gmail.com"
    cont = 123456
    us2 = "ragox@outlook.es"
    cont2 = 789101112
    if (username == us && password == cont) {
        alert("bienvenido Miguel")
    }else{
        if (password==cont2 && username==us2 ) {
            alert("bienvenido harry")
        }
    }

}
let comprobar=()=>{
    let a = document.getElementById("exampleDropdownFormEmail1").value
    let b = document.getElementById("exampleDropdownFormPassword1").value
    if (a =="" || b=="" ){
alert("los datos estan vacio")
    }
}
