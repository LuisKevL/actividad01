//let, var, const
//const genera una constante
//var, let generam una variable
//$scope = fragmento de código
/*scope = 
function suma(){
    const numero = 2;
    let numero2 = 4;
    //$scope primero
    function sumaSeguna(){
        const numero = 3;
        let numero2 = 4;
        //scope segundo
    }
}

*/
//arrow function
/* cualquiera de las tres está bien
function suma(numero1, numero2){
    return numero1 + numero2;
}

const suma = function (numero1, numero2){
    return numero1+numero2
}

const suma = () => numero1+numero2
*/

//template string
const name= "luis"
const surname = "lopez"
const lastname = "ocampo"
const fullname = name + '' + surname + '' + lastname + ``
const fullname2 = `${name} ${surname} ${lastname}`
//forma de solo sacar el nombre de tal funcion
const person = {
    name: '',
    surname: ''
}
(()=>{
    const name = person.name.toString();
    const name2 = `${person.name} ${person.lastname ? person.lastname: ''}`
})()

//array
const roles = []
//arrayList
const roles2 = [
    {
        key: 'ADMIN',
        name: 'Super Administrador'
    },
    {
        key: 'USER',
        name:'Usuario'
    }
]
//lista
const roles3 = {}
//arrayList, array, list

//push, splice, indexOf, find, filter, map, foreach, lenght
/*
roles.forEach((element, index) =>{
    console.log(element.name);
})

for(let i = 0; i <= roles.length; i++){

}
*/
//desestructuración de objetos
/*
const person2 = {
    name: 'luis',
    age: 24,
    address: {
        street: 'barona',
        number: 29
    }
}

console.log(person2.name);
console.log(person.address.street);

(()=>{
    const {name, address:{street}}=person2

})()
*/


