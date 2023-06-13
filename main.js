let cuentas =[
{nombre: "Karina", saldo: 200, password: "5565"},
{nombre: "Winter", saldo: 290, password: "winwin"},
{nombre: "New", saldo: 67, password: "roar"},
];

const form=document.getElementById("contactForm")

form.addEventListener('submit', function(Event) {
    Event.preventDefault();
    const name= document.getElementById('name').value;
    const password= document.getElementById('password').value;

    if(name ===''|| password ===''){
        alert('Porfavor completa todos los campos')
    } else{
        alert('Registro exitoso');
        formRegistro.reset();
    }
})

function consultar_saldo(){

    if(usuario == "Karina") {
        parrafo.innerHTML ="Tu saldo actual es" + saldototal;

    } else if (usuario= "Winter") {
        parrafo.innerHTML = "Tu saldo actual es" + saldototal1;
    } else {
        parrafo.innerHTML = "Tu saldo actual es" + saldototal2;
    }
}

function ingresar_monto(){
    if (usuario == "Karina") {
        let dinero = Number (window.prompt("Digite el valor a consignar", ))
        let suma = saldototal + dinero;
            if (suma > 990) {
                alert ("No puede tener más de 900 pesos, por favor ingrese un monto menor")
            } else{
                alert ("Acaba de ingresar" + dinero)
                parrafo.innerHTML = "Tu saldo actual es" + suma;
                saldototal = suma;
            }
    } else if (usuario == "Winter") {
        let dinero = Number (window.prompt("Digite el valor a consignar", ))
        let suma = saldototal1 + dinero;
            if (suma > 990) {
                alert ("No puede tener más de 900 pesos, por favor ingrese un monto menor")
            } else{
                alert ("Acaba de ingresar" + dinero)
                parrafo.innerHTML = "Tu saldo actual es" + suma;
                saldototal1 = suma;
            }
 
    } else {
        let dinero = Number (window.prompt("Digite el valor a consignar", ))
        let suma = saldototal2 + dinero;
            if (suma > 990) {
                alert ("No puede tener más de 900 pesos, por favor ingrese un monto menor")
            } else{
                alert ("Acaba de ingresar" + dinero)
                parrafo.innerHTML = "Tu saldo actual es" + suma;
                saldototal2 = suma;
            }
    }
}

function retirar_monto(){
    if (usuario == "Karina") {
        let dinero = Number(window.prompt ("Digite el valor a retirar", ""))
        let resta = saldototal - dinero;
            if (resta < 10) {
                alert ("No puede tener menos de 10 pesos, retire un monto mayor")

            } else {
                alert ("Acaba de retirar" + dinero)
                parrafo.innerHTML = "Tu saldo actual es" + resta;
                saldototal = resta;
            }
    } else if (usuario == "Winter"){
        let dinero = Number(window.prompt ("Digite el valor a retirar", ""))
        let resta = saldototal1 - dinero;
            if (resta < 10) {
                alert ("No puede tener menos de 10 pesos, retire un monto mayor")

            } else {
                alert ("Acaba de retirar" + dinero)
                parrafo.innerHTML = "Tu saldo actual es" + resta;
                saldototal1 = resta;
    }
 } else {
    let dinero = Number(window.prompt ("Digite el valor a retirar", ""))
    let resta = saldototal2 - dinero;
        if (resta < 10) {
            alert ("No puede tener menos de 10 pesos, retire un monto mayor")

        } else {
            alert ("Acaba de retirar" + dinero)
            parrafo.innerHTML = "Tu saldo actual es" + resta;
            saldototal2 = resta;
 }
 

 }
  }

  