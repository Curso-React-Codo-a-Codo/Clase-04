let MyDom = document; //document es un objeto global

let name = "Firulais";

const myDog = {
    name: "Firulais" //este es un atributo (Nombre del atributo : valor)
};//Es una manera de construir un objeto

const myCat = {
    "name":"Kity"//este es un atributo (Nombre del atributo : valor)
};//Es una manera de construir un objeto

console.log(myDog.name);
console.log(myCat.name);

/*class Mouse{
    constructor(name, age){ //Le pasamos name como valir para construir
        this.name = name; // se utiliza this en el caso del contexto de un objeto, nopodria ser this.perro = name
        this.age = age;
    }
}

const myMouse = new Mouse("Perez",4);
*/

function Mouse(name, age){
    this.name=name;
    this.age=age;
}

const myMouse = new Mouse("Carlos",10);

//Esta funcion y la llamada de la misma es igual a la clase y la llamada de la clase de arriba

class Button {
    constructor(parentID, text){
        //completa this.text
    }
    render(){
        let myApp = document.getElementById(this.parentID)

        myApp.innerHTML = ""; // VAmos a escribir el html para que se 
        // dibuje un boton con el texto de this.text
    }
}

//construir el objeto boton y llamar al metodo render de ese objeto.
// let myButtom = new....
//myButtom.metodoQueSea()
